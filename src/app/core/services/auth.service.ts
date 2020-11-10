import { Role } from './../models/role.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService) { }

  isAuthenticated(): boolean {
    if (this.tokenService.getAuthToken() != null || 
        this.tokenService.getAuthToken() != undefined) {
      if (this.tokenService.isTokenExpired()) {
        return false;
      }
      return true;
    }
    else {
      return false;
    }
  }

  isTableRole(): boolean {
    if (this.isAuthenticated()) {
      let decodedToken = this.tokenService.getDecodedToken(this.tokenService.getAuthToken());
      if (decodedToken.user.role.name === 'Mesa') {
        return true;
      }
      return false;
    }
    return false;
  }

  isAdminRole(): boolean {
    if (this.isAuthenticated()) {
      let decodedToken = this.tokenService.getDecodedToken(this.tokenService.getAuthToken());
      if (decodedToken.user.role.name === 'Admin') {
        return true;
      }
      return false;
    }
    return false;
  }

  isWaiterRole(): boolean {
    if (this.isAuthenticated()) {
      let decodedToken = this.tokenService.getDecodedToken(this.tokenService.getAuthToken());
      if (decodedToken.user.role.name === 'Camarero') {
        return true;
      }
      return false;
    }
    return false;
  }

  isCashRegisterRole(): boolean {
    if (this.isAuthenticated()) {
      let decodedToken = this.tokenService.getDecodedToken(this.tokenService.getAuthToken());
      if (decodedToken.user.role.name === 'Cajero') {
        return true;
      }
      return false;
    }
    return false;
  }

  getRole(): Role {
    let decodedToken = this.tokenService.getDecodedToken(this.tokenService.getAuthToken());
    return (decodedToken.user.role) as Role;
  }

}
