import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: Subject<boolean> = new Subject<boolean>();

  constructor(private tokenService: TokenService) { }

  isAuthenticated(): void {
    if (this.tokenService.getAuthToken() != null || 
        this.tokenService.getAuthToken() != undefined) {
      this.isLoggedIn$.next(!this.tokenService.isTokenExpired());
    }
    else {
      this.isLoggedIn$.next(false);
    }
  }


}
