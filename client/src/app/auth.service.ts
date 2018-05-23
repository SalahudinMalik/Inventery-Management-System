import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthService {
  
  fullurl:any = '';
   userID = '';
   private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private global:Globals ,
    private http: HttpClient,
    private dataService:DataService
  ) { }
  setUserToken(token:string):void{
    localStorage.setItem('userToken' , token);
  }
  getUserToken():string{
    return localStorage.getItem('userToken');
  }
  getLogin(username:string,password:string):Observable<any>{
    this.fullurl = '';
    let jsonObj = JSON.stringify({email:username , password:password});
   // console.log("obj : "+jsonObj)
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + '/Users/login';
    // this.fullurl = this.global.weburl + "auth/login";
    
      // return  this.http.get<any>(this.fullurl)
      // .map((result: Response) => result)
      // .catch(this.errorHandler);
    return  this.http.post(this.fullurl, jsonObj , this._options)
    .map((result: Response) => result)
    .catch(this.errorHandler);
     
    
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  }
  public logout():void{
    this.fullurl = '';
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + 'auth/logout'+'/'+localStorage.getItem('token');
    // this.fullurl = this.global.weburl + "auth/login";
    
       this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
    
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // let ret:any = true;
    // console.log('token : ' +token + "value : "+ this.userID);
    // if(token == null){
    //   ret = false;
    // }
    return token != null;
    //return token == this.userID;
    //return true;
  }
  public isNavigate(): boolean{
    
      this.dataService.getUserMenu(localStorage.getItem('token'))
      .subscribe(data =>{
        data.forEach(element => {
          console.log( "AUTH GUARD : "+element.menuId);
          switch(element.menuId){
            case '100':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
            case '101':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
            case '103':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
              
            case '104':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
            case '105':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
            
            
            case '106':
            console.log( "AUTH GUARD TRUE : "+element.menuId);
             return true;
               
            default :
                 console.log( "DEFAULt");
              return false  ;
          
            
          }
        });
      })
    return true;
  }
  setToken(username:string){
    this.userID = username;
    localStorage.setItem('token' , username);
   // console.log('setToken " '+this.userID);
  }
  getToken():any{
    return localStorage.getItem('token');
  }
  rmToken(){
    localStorage.removeItem('token');
    this.logout();
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
