import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate() {
    return this.authService.isAdmin;
  }
}
