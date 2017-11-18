import { userModel } from './../../app/userModel';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the AprovalregisterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AprovalregisterProvider {

  constructor(public http: Http) {
    console.log('Hello AprovalregisterProvider Provider');
  }
  getdata() : Observable<userModel[]> {
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
     return this.http.get("http://192.168.42.240:3030/users",options).map(res => res.json() as userModel[]);
  }
  ubahstatus(data,id){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data)
     return this.http.patch("http://192.168.42.240:3030/users/"+id,body,options).map(res => res.json().data as userModel[]);
  }
}
