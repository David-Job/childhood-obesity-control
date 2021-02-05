import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:4000/api/user';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    this.http.get(this.url);
  }
}
