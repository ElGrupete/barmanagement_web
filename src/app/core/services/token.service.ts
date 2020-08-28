import { AUTH_KEYS } from './../../shared/constants/auth-keys';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private jwtHelper = new JwtHelperService

  constructor() { }

  setAuthToken(token: string): void {
    localStorage.setItem(AUTH_KEYS.authToken, token);
  }

  getAuthToken(): string {
    let token = localStorage.getItem(AUTH_KEYS.authToken);
    return token;
  }

  getDecodedToken(token: string): any {
    let decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken;
  }

  isTokenExpired(): boolean {
    if (localStorage.getItem(AUTH_KEYS.authToken) != undefined) {
      let token = localStorage.getItem(AUTH_KEYS.authToken);
      return this.jwtHelper.isTokenExpired(token);
    }
  }

}
