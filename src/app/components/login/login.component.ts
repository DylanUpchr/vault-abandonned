import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
let sha256 = require('crypto-js/sha256');
let encHex = require('crypto-js/enc-hex');

import { User } from '../../classes/user';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private url = 'api/db';
  constructor(private http: HttpClient,
              public datastoreService: DatastoreService) {
    }
    getUsers(): Observable<Object>{
      return this.http.get<Object>(this.url);
    }

  ngOnInit() {
    this.attemptLogIn('admin', 'admin');
  }
  attemptLogIn(username: string, password: string) {
    this.getUsers().subscribe(data => {
      data['users'].forEach(user => {
        console.log(user);
        if (user.Username === username) {
          if (user.Password === sha256(password).toString(encHex)) {
            console.log('logged in');
          }
        }
      });
    });
  }
}
