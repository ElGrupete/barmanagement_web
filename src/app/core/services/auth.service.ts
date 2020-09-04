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


}
