import { kelasModel } from './../../app/masterkelas';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MasterkelasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MasterkelasProvider {

  constructor(public http: Http) {
    console.log('Hello MasterkelasProvider Provider');
  }
  getdata():Observable<kelasModel[]>{
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://localhost:3030/masterkelas',options).map(res => res.json() as kelasModel[]);
  }
  simpandata(data){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post('http://localhost:3030/masterkelas',body,options).map(res => res.json());
  }
  hapusdata(item){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let id = item.id;
    return this.http.delete('http://localhost:3030/masterkelas/'+id,options).map(res => res.json());
  }
  updatedata(data,id){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data)
    return this.http.patch('http://localhost:3030/masterkelas/'+id,body,options).map(res => res.json());
  }
}
