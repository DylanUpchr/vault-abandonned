import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User, Roles } from '../classes/user';
import { File } from '../classes/file';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const db = {
      users: [
        new User(1, 'admin@admin.com', 'admin', 'd82494f05d6917ba02f7aaa29689ccb444bb73f20380876cb05d1f37537b7892', Roles.Admin),
        new User(2, 'user@user.com', 'user', 'e172c5654dbc12d78ce1850a4f7956ba6e5a3d2ac40f0925fc6d691ebb54f6bf', Roles.User)
      ],
      files: [
        new File(2, '/', 'test', 'jpg', 0, null, null, new Date(Date.now()), null, null)
      ]
  };
    return {db};
  }
}
