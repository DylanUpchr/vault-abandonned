import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url = 'api/db';

  getFiles(path?: string): Observable<object> {
    const files = new Subject<object>();

    if (path === null || path === '' || path === undefined) {
      path = '/';
    }
    this.userService.getUser().subscribe(user => {
      this.http.get<object>(this.url).subscribe(db => {
        files.next(
          Object.create(db).files
          .filter(file => (file.User === user.Id && file.FilePath === path))
        );
      });
    });
    return files;
  }
  constructor(private http: HttpClient,
              private userService: UserService) { }
}
