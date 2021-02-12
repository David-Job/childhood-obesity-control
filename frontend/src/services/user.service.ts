import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:4000/api/users';

  private options = {
    headers: { 'Content-Type': 'application/json' },
  };

  private constructor(private http: HttpClient) {}

  public create(body: object): Observable<any> {
    return this.http.post(this.baseUrl, body, this.options);
  }

  public readAll(): Observable<any> {
    return this.http.get(this.baseUrl, this.options);
  }

  public read(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.options);
  }

  public update(id: number, body: object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, body, this.options);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.options);
  }
}
