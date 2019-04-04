import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  id: number;
  user_name: string;
  email: string;
  password: string;
  id_photo_perfil: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  user_name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthenticationService {
  private token: string;
  // conexión para devapp
  public rootUrl = 'http://192.168.1.53:3000';
  // conexión en local
  // public rootUrl = 'http://localhost:3000';

  constructor( private http: HttpClient, private router: Router) {}

  private savetoken (token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken (): string {
    if (this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }

  public getUserDetail(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetail();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public register (user: TokenPayload): Observable<any> {
    const base = this.http.post(this.rootUrl + '/registro', user);

    const request = base.pipe(
      map(( data: TokenResponse) => {
        if (data.token) {
          this.savetoken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public login (user: TokenPayload): Observable<any> {
    const base = this.http.post(this.rootUrl + '/login', user);

      const request = base.pipe(
      map(( data: TokenResponse) => {
        if (data.token) {
          this.savetoken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public profile(): Observable<any> {
    return this.http.get(this.rootUrl + '/perfil', {
      headers: { Authorization: this.getToken()}
    });
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('usertoken');
    this.router.navigateByUrl('/login');
  }
}
