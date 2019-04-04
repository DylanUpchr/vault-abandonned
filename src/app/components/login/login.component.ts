import { Router } from '@angular/router';
import { User, Roles } from './../../classes/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { UserService } from './../../services/user.service';
import { CookieService } from 'ngx-cookie-service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: Observable<string>;
  loginFormGroup = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    passwordFormControl: new FormControl('')
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.userService.getUserRole().subscribe(role => {
        if (role === Roles.Admin) {
          this.router.navigate(['/dashboard']);
        } else if (role === Roles.User) {
          this.router.navigate(['/files']);
        }
      });
    }
    const token = this.cookieService.get('authToken');
    if (token !== '' && token !== null) {
      this.errorMessage = this.userService.attemptLogIn(null, null, token);
    }
  }

  onSubmit() {
    this.errorMessage = this.userService.attemptLogIn(
      this.loginFormGroup.value.emailFormControl,
      this.loginFormGroup.value.passwordFormControl
    );
  }
}
