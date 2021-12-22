import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticateService} from "./authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticateService.user;

    if (currentUser) {
      return true
    }
    // /login?returnUrl=/bookshelf
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })

    return false;
  }

}
