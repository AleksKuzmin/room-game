import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  status = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private utilityService: UtilityService
  ) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentToken = _route.data['token'];

    if (this.authService.verifyToken(currentToken)) {
      this.status = true;
    } else {
      alert('You need a key to get into this room');
      this.router.navigate(['/locked']);
    }

    return this.status;
  }
}
