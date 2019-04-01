import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import encHex from 'crypto-js/enc-hex';

import { User, Roles } from '../classes/user';
import { DatastoreService } from '../services/datastore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/db';

  getUsers(): Observable<object> {
    return this.http.get<object>(this.url);
  }
  getUser(): Observable<User> {
    return this.datastoreService.getCurrentUser();
  }
  getUserByEmail(email: string): Observable<User> {
    const user = new Subject<User>();
    this.getUsers().subscribe(data => {
      user.next(Object.create(data).users.filter(u => u.Email === email)[0]);
    });
    return user;
  }
  getUserRole(): Observable<Roles> {
    const userRole = new BehaviorSubject<Roles>(Roles.Guest);
    this.getUser().subscribe(user => {
      if (user.Id !== undefined) {
        userRole.next(user.Role);
      } else {
        userRole.next(Roles.Guest);
      }
    });
    return userRole.asObservable();
  }
  attemptLogIn(email: string, password: string): Observable<string> {
    const errorMessage = new Subject<string>();
    this.getUserByEmail(email).subscribe(user => {
      if (user != null) {
        if (user.Password === sha256(password + user.Username).toString(encHex)) {
          this.datastoreService.setCurrentUser(user);
          if (user.Role === Roles.Admin) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/files']);
          }
        } else {
          errorMessage.next('Password Incorrect.');
        }
      } else {
        errorMessage.next('Email Incorrect.');
      }
    });
    return errorMessage;
  }
  isLoggedIn(): Observable<boolean> {
    const value = new BehaviorSubject<boolean>(false);
    let currentUser: User;
    this.datastoreService.getCurrentUser().subscribe(user => {
      currentUser = user;
      value.next(currentUser.Id !== 0 && currentUser.Id !== undefined ? true : false);
    });
    return value;
  }

  constructor(
    private http: HttpClient,
    private datastoreService: DatastoreService,
    private router: Router
  ) {}
}
