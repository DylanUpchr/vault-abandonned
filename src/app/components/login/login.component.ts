import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../classes/user';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private url = 'api/db';
  constructor(
    private http: HttpClient,
    public datastoreService: DatastoreService) {
      this.getUsers().subscribe(data => {console.log(data['users'])});
    }
    getUsers(): Observable<Object>{
      return this.http.get<Object>(this.url);
    }

  ngOnInit() {
    this.datastoreService.updateValue(new User(undefined, undefined));
  }

}
