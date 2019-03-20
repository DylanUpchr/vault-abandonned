import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const db = {
      users: [
        {username: 'admin', password: ''}
      ],
      files: [
        {test: 'test'}
      ]
  };
    return {db};
  }
}
