import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isLogged()) {
      this.router.navigate(['login']);
      return false;
    } else if (!this.auth.isAdmin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
