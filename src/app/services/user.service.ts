import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import cryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import jwt from 'jsonwebtoken';

import { User, Roles } from '../classes/user';
import { DatastoreService } from '../services/datastore.service';
import { TOKEN_CONFIG } from '../config/tokenConfig';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/db';

  getUsers(): Observable<object> {
    const users = new Subject<object>();
    this.http.get<object>(this.url).subscribe(db => { users.next(Object.create(db).users); });
    return users;
  }
  getUser(): Observable<User> {
    return this.datastoreService.getCurrentUser();
  }
  getUserId(): Observable<number> {
    const userId = new Subject<number>();
    this.datastoreService.getCurrentUser().subscribe(data => {
      userId.next(data.Id);
    });
    return userId;
  }
  getUserById(id: number) {
    const user = new Subject<User>();
    this.getUsers().subscribe(data => {
      user.next(Object.create(data).filter(u => u.Id === id)[0]);
    });
    return user;
  }
  getUserByEmail(email: string): Observable<User> {
    const user = new Subject<User>();
    this.getUsers().subscribe(data => {
      user.next(Object.create(data).filter(u => u.Email === email)[0]);
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
  attemptLogIn(
    email?: string,
    password?: string,
    token?: string
  ): Observable<string> {
    const res = new BehaviorSubject<string>('');
    if (token) {
      this.verifyJWT(token).subscribe(data => {
        if (data.name !== 'TokenExpiredError') {
          this.getUserById(data.id).subscribe(user => {
            this.cookieService.set('authToken', this.createJWT(user.Id));
            this.datastoreService.setCurrentUser(user);
            if (user.Role === Roles.Admin) {
              this.router.navigate(['/dashboard']);
            } else {
              this.router.navigate(['/files']);
            }
          });
        } else if (data.name === 'TokenExpiredError') {
          res.next('Token Expired');
        }
      });
    } else if (email && password) {
      this.getUserByEmail(email).subscribe(user => {
        if (user != null) {
          if (user.Password === sha256(password + user.Username).toString(cryptoJS.encHex)) {
            this.datastoreService.setCurrentUser(user);
            this.cookieService.set('authToken', this.createJWT(user.Id));
            if (user.Role === Roles.Admin) {
              this.router.navigate(['/dashboard']);
            } else {
              this.router.navigate(['/files']);
            }
          } else {
            res.next('Password Incorrect.');
          }
        } else {
          res.next('Email Incorrect.');
        }
      });
    } else if (!email) {
      res.next('No email provided.');
    }
    return res;
  }
  isLoggedIn(): Observable<boolean> {
    const value = new BehaviorSubject<boolean>(false);
    let currentUser: User;
    this.datastoreService.getCurrentUser().subscribe(user => {
      currentUser = user;
      value.next(
        currentUser.Id !== 0 && currentUser.Id !== undefined ? true : false
      );
    });
    return value;
  }
  createJWT(userId: number): string {
    const token = jwt.sign({ id: userId }, TOKEN_CONFIG.secret, {
      expiresIn: TOKEN_CONFIG.duration
    }); // Create JWT Token
    return token;
  }
  verifyJWT(token): Observable<any> {
    const value = new BehaviorSubject<any>('');
    jwt.verify(token, TOKEN_CONFIG.secret, (err, decoded) => {
      if (err) {
        value.next(err);
      } else {
        value.next(decoded);
      }
    });
    return value;
  }

  constructor(
    private http: HttpClient,
    private datastoreService: DatastoreService,
    private router: Router,
    private cookieService: CookieService
  ) {}
}
