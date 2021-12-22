import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Role} from "./role.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentUser!: User| null

  readonly LOGIN_PAGE: string = "login";

  constructor(private router: Router) {
    this.currentUser = JSON.parse(<string>localStorage.getItem('currentUser'));
  }

  public get user(): User | null {
    return this.currentUser;
  }

  login(username: string, password: string): User | null {
    if (username === 'root' && password === 'admin') {
      const user = {
        id: 1,
        username: 'root',
        roles: [Role.Admin],
        token: 'rootadmin',
      }

      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;

        return this.currentUser;
      }
    }


    return null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.router.navigate([this.LOGIN_PAGE]);
  }
}
