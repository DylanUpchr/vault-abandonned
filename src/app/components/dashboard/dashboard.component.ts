import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.isLoggedIn().subscribe(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }

}
