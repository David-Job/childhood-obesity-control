import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User {
  email: string;
  password: any;
}

interface AuthResponse {
  firstName: any;
  surname1: any;
  surname2: any;
  email: any;
  password: any;
  role: number;
  token: string;
}

const apiUrl = 'http://localhost:8080/api/signin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private storage: Storage) {}

  getOptions(user: User) {
    let base64Credentials = window.btoa(`${user.email}:${user.password}`);
    let basicAccess = 'Basic ' + base64Credentials;
    return {
      headers: {
        Authorization: basicAccess,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  logIn(user: User): Observable<AuthResponse> {
    return this.httpClient.post(apiUrl, null, this.getOptions(user)).pipe(
      tap(async (res: AuthResponse) => {
        if (res.firstName) {
          await this.storage.set('token', res.token);
        }
      })
    );
  }

  async logOut() {
    await this.storage.remove('token');
  }

  async isLoggedIn() {
    let token = await this.storage.get('token');
    return token ? true : false;
  }
}
