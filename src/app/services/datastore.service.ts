import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './../classes/user';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private dataStore = new BehaviorSubject<User>(new User());
  data = this.dataStore.asObservable();

  constructor() { }

  updateValue(user: User) {
    this.dataStore.next(user);
  }
  getValue(): Observable<User> {
    return this.data;
  }
}
