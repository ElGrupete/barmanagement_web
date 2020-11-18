import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAdminRole()) {
      return true;
    } else if (this.authService.isCashRegisterRole() || this.authService.isWaiterRole()) {
      this.router.navigate(['/management']);
    }
    this.router.navigate(['/management/menus/menu/chef-suggestion']);
    return false;
  }
              
}

@Injectable({
  providedIn: 'root'
})
export class ClientRoleGuard {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isTableRole()) {
      return true;
    } else if (this.authService.isCashRegisterRole() || this.authService.isWaiterRole()) {
      this.router.navigate(['/management']);
    }
    this.router.navigate(['/management']);
    return false;
  }
              
}

@Injectable({
  providedIn: 'root'
})
export class CashRegisterOrWaiterRoleGuard {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isCashRegisterRole() || this.authService.isWaiterRole()) {
      return true;
    } else if (this.authService.isAdminRole()) {
      this.router.navigate(['/management']);
    }
    this.router.navigate(['/management/menus/menu/chef-suggestion']);
    return false;
  }
              
}