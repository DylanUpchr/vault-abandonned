import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url = 'api/db';

  getFiles(): Observable<object> {
    const files = new Subject<object>();
    this.http.get<object>(this.url).subscribe(db => { files.next(Object.create(db).files); });
    return files;
  }
  constructor(private http: HttpClient) { }
}
