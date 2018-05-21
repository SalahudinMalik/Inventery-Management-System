import { Injectable } from '@angular/core';
import { Globals } from '../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import {Plot} from './models/plot.model';
import {Agent} from './models/agent.model';
import {User} from './models/User.model';
import {Menu} from './models/menu.model';


@Injectable()
export class DataService {

  fullurl:any = '';
  res:any;
  dataObj:any;
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private global:Globals ,
    private http: HttpClient

  ) { }
  //(res) => this.extractData(res)
  getAllAgent():Observable<Agent[]>{
    this.fullurl = this.global.weburl + 'agent/getAgent' ;
    // this.fullurl = this.global.weburl + "auth/login";
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }
  getAllUser():Observable<User[]>{
    this.fullurl = this.global.weburl + '/appUsers' ;
    // this.fullurl = this.global.weburl + "auth/login";
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }
  getAllMenu():Observable<Menu[]>{
    this.fullurl = this.global.weburl + '/menubars' ;
    // this.fullurl = this.global.weburl + "auth/login";
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }
  saveData(data:any): Observable<any> {
    this.fullurl = this.global.weburl + 'plotD/saveAP';
      this.res = this.http.post<any>(this.fullurl, data  , this._options)
          .map((result: Response) => result)
          .catch(this.errorHandler);
    return this.res;
  }
  saveMenuData(data:any , selectedUser:string ): Observable<any> {
    this.fullurl = this.global.weburl + '/userMenus';
   
      this.res = this.http.post<any>(this.fullurl, data  , this._options)
          .map((result: Response) => result)
          .catch(this.errorHandler);
    return this.res;
  }
  getUserMenu():Observable<any>{
    
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let opt = { responseType: 'text' as 'text' };
     this.fullurl = this.global.weburl + '/userMenus';
    // this.fullurl = this.global.weburl + "auth/login";
    
      // return  this.http.get<any>(this.fullurl)
      // .map((result: Response) => result)
      // .catch(this.errorHandler);
    return  this.http.get(this.fullurl+'?filter[where][username]='+localStorage.getItem('token'))
    .map((result: Response) => result)
    .catch(this.errorHandler);
  }
  isNav(menuId:string):boolean{
    let menuList:any[]=[];
    let isnav:boolean = false;

   

    this.getUserMenu()
      .subscribe(data =>{
        menuList = data;
        menuList.forEach(element => {
          console.log('nav service menu : '+ element.menuId);
          if(element.menuId == menuId){
            console.log('nav service menu id : '+ element.menuId);
            return true;
          
          }
        });
    });

    
    
    
    return isnav;
  }
  getAllPlots():Observable<any>{
    this.fullurl = this.global.weburl + 'plotD/plots' ;
    // this.fullurl = this.global.weburl + "auth/login";
    
      return  this.http.get(this.fullurl)
        .map((res : Response) => res)
        .catch(this.errorHandler);
     
  }
  getLineChart():Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'charts/lineChart';
    
      return  this.http.get(this.fullurl)
      .map(result => result)
      .catch(this.errorHandler);
     
    
  }
  getAgentPlot(agentCode:string):Observable<any>{
    this.fullurl = '';
    this.fullurl = this.global.weburl + 'plotD/agentPlots'+'/'+agentCode;
    
      return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
    
    
    
  }
//   private extractData(res: Response) {
//     if (res.status < 200 || res.status >= 300) {
//           throw new Error('Bad response status: ' + res.status);
//         }
//     let body = res.json();
//     return body || { };
//  }
    
    //console.log(this.fullurl);
  // return this.http.get<String>(this.fullurl)
  //                   .catch(this.errorHandler);
    
  
  
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
