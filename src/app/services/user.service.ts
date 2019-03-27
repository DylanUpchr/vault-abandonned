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
  arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item;
     return obj;
   }, {})

  getUsers(): Observable<object> {
    return this.http.get<object>(this.url);
  }
  getUser(): Observable<User> {
    return this.datastoreService.getCurrentUser();
  }
  getUserRole(): Observable<Roles> {
    const userRole = new BehaviorSubject<Roles>(Roles.Guest);
    this.getUser().subscribe(user => {
      if ( user.Id !== undefined) {
        userRole.next(user.Role);
      } else {
        userRole.next(Roles.Guest);
      }
    });
    return userRole.asObservable();
  }
  attemptLogIn(email: string, password: string): Observable<string> {
    const errorMessage = new Subject<string>();
    this.getUsers().subscribe(data => {
      Object.create(data).users.forEach(user => {
        if (user.Email === email) {
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
    });
    return errorMessage;
  }
  isLoggedIn(): Observable<boolean> {
    let value: Observable<boolean>;
    let currentUser: User;
    this.datastoreService.getCurrentUser().subscribe(user => {
      currentUser = user;
      value = of((currentUser.Id !== 0 && currentUser.Id !== undefined ? true : false));
    });
    return value;
  }

  constructor(private http: HttpClient,
              public datastoreService: DatastoreService,
              private router: Router) { }

}
