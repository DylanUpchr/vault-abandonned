import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const db = {
      users: [
        new User(0, 'admin')
      ],
      files: [
        {test: 'test'}
      ]
  };
    return {db};
  }
}
