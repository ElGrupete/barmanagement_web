import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(private authService: AuthService,
              private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.isAuthenticated();
    let isLoggedIn: boolean; 
    this.authService.isLoggedIn$.subscribe(status => {
      isLoggedIn = status
    });

    if (isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
