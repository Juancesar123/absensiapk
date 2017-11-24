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
    console.log('Hello LaporanabsensiProvider Provider');
  }
  getdata() : Observable <Laporanabsensimodel[]>{
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://192.168.100.8:3030/laporanabsensi',options).map(res => res.json().data as Laporanabsensimodel[]);

  }
}
