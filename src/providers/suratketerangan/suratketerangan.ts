import { Observable } from 'rxjs/Observable';
import { suratketeranganmodel } from './../../app/suratketeranganmodel';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SuratketeranganProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SuratketeranganProvider {

  constructor(public http: Http) {
    console.log('Hello SuratketeranganProvider Provider');
  }
  getdata():Observable<suratketeranganmodel[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://192.168.100.8:3030/tmpsuratketerangan',options).map(res => res.json().data as suratketeranganmodel[]);
  }
  hapusdata(item):Observable<suratketeranganmodel[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let id = item.id;
    return this.http.delete('http://192.168.100.8:3030/tmpsuratketerangan/'+id,options).map(res => res.json().data as suratketeranganmodel[]);
  }
}
