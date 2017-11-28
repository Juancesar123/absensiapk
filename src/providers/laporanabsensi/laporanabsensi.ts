import { Observable } from 'rxjs/Observable';
import { Laporanabsensimodel } from './../../app/Laporanabsensimodel';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LaporanabsensiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LaporanabsensiProvider {

  constructor(public http: Http) {
    
  }
  getdata() : Observable <Laporanabsensimodel[]>{
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://198.50.174.117/laporanabsensi',options).map(res => res.json() as Laporanabsensimodel[]);

  }
  simpandata(data) : Observable <Laporanabsensimodel[]>{
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post('http://198.50.174.117/laporanabsensi',body,options).map(res => res.json() as Laporanabsensimodel[]);

  }
}