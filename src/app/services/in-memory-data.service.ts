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
        new File(1, 2, '/', 'test', 'jpg', 0, 'file.png', null, new Date(Date.now()), null, null),
        new File(2, 2, '/', 'test2', 'jpg', 0, 'file.png', null, new Date(Date.now()), null, null),
        new File(3, 2, '/', 'test3', 'jpg', 0, 'file.png', null, new Date(Date.now()), null, null),
        new File(4, 2, '/', 'test4', 'jpg', 0, 'file.png', null, new Date(Date.now()), null, null),
        new File(5, 2, '/', 'test5', 'jpg', 0, 'file.png', null, new Date(Date.now()), null, null)
      ]
  };
    return {db};
  }
}
