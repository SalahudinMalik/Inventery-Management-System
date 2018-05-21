import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  constructor (public auth: AuthService, public router: Router , public dataService:DataService){}
  canActivate(): boolean {
    let status:boolean = true;
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      this.auth.logout();
      status =  false;
    }
   
    return status;
  }
 
}
