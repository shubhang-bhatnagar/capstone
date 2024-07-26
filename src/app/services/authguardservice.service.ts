import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate{

  constructor(private authService:AuthserviceService) { }
  canActivate():any
  {
    return this.authService.isTokenStored();
  }
}