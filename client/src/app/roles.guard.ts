import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/Rx";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router, public dataService:DataService){

  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
//: Observable<boolean> | Promise<boolean> | boolean
    let d:any= await this.dataService.getUserMenuList();
    console.log('d '+d);
    for(let i=0 ; i< d.length; i++){
      if(d[i].menuId == next.data.code){
        console.log('true');
        return true;
      }
    }
    console.log('false');
    this.router.navigate(['/pages/404']);
    return false;
    //  if(d == true){
    //    return true;
    //  }
    //  else{
    //    return false;
    //  }
      // let status:boolean = true;
      // let menuL:string[] ;
      // let ss;
      // console.log('roles function ');
      // // if (this.authService.isAuthenticated()) {
      //   let code = next.data.code;
      //   let ab;
      //   let fun = await this.dataService.uMenuList(code);
      //     fun.then( async data =>{
      
      //       ab = JSON.stringify(data);
      //       ss = JSON.parse(ab);
      //       console.log(ss + 'dd' + data);
      //       await ss.forEach( element => {
      //         if(element == code){
      //           console.log('return true');  
      //            status =  true;

      //         }
      //       });
      //     })
      
            
      //       // codes = data['menuId'];
            
           
         
      //     // codes.forEach(element => {
         
      //     //   if(element == code){
      //     //     return true;
      //     //   }
      //     // });
       
       
      // // }
      // console.log('status : '+status);
      // return status;
      // if(!status){
      //  console.log(status);

      //  // this.router.navigate(['/pages/404']);
      // }
      // else{
      //   return true;
      // }
    
  }
}
