import { Injectable } from '@angular/core';
import { Globals } from '../../Globals';
import { HttpClient, HttpHeaders  ,HttpErrorResponse } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/Rx";

import { Customer } from '../models/customer.model';

@Injectable()
export class SetupService {

  fullurl:any = '';
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(
    private global:Globals ,
    private http: HttpClient

  ) { }
  getAllCustomer():Observable<Customer[]>{
    this.fullurl = ''
    this.fullurl = this.global.weburl + '/customers' ;
    // this.fullurl = this.global.weburl + "auth/login";
    return  this.http.get(this.fullurl)
      .map((result: Response) => result)
      .catch(this.errorHandler);
     
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
