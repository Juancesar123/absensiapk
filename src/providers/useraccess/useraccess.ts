import { UserAccessModel } from './../../app/useraccessModel';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UseraccessProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UseraccessProvider {

  constructor(public http: Http) {
    console.log('Hello UseraccessProvider Provider');
  }
  getdata():Observable<UserAccessModel[]>{
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://198.50.174.117/masteruseraccess',options).map(res => res.json() as UserAccessModel[]);
  }
  simpandata(data){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post('http://198.50.174.117/masteruseraccess',body,options).map(res => res.json() as UserAccessModel[]);
  }
  hapusdata(item){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let id = item.id
    return this.http.delete('http://198.50.174.117/masteruseraccess/'+id,options).map(res => res.json() as UserAccessModel[]);
  }
  updatedata(data,id){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.patch('http://198.50.174.117/masteruseraccess/'+id,body,options).map(res => res.json() as UserAccessModel[]);

  }
}
