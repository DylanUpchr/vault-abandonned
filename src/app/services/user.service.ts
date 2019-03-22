import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import encHex from 'crypto-js/enc-hex';

import { User } from '../classes/user';
import { DatastoreService } from '../services/datastore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/db';

  getUsers(): Observable<Object>{
    return this.http.get<Object>(this.url);
  }

  attemptLogIn(username: string, password: string) {
    this.getUsers().subscribe(data => {
      data['users'].forEach(user => {
        if (user.Username === username) {
          if (user.Password === sha256(password).toString(encHex)) {
            this.datastoreService.setCurrentUser(user);
            this.router.navigate(['/dashboard']);
          }
        }
      });
    });
  }
  isLoggedIn(): Observable<boolean> {
    let value: Observable<boolean>;
    let currentUser: User;
    this.datastoreService.getCurrentUser().subscribe(user => {
      currentUser = user;
      value = (currentUser.Id !== 0 && currentUser.Id !== undefined ? true : false);
    });
    return value;
  }

  constructor(private http: HttpClient,
    public datastoreService: DatastoreService,
    private router: Router) { }

}
