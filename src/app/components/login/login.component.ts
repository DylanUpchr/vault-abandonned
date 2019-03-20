import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private url = 'api/db';
  constructor(
    private http: HttpClient) {
      this.getUsers().subscribe(data => {console.log(data['users'])});
    }
    getUsers(): Observable<Object>{
      return this.http.get<Object>(this.url);
    }

  ngOnInit() {
  }

}
