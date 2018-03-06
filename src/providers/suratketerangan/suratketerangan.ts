import { Observable } from 'rxjs/Observable';
import { suratketeranganmodel } from './../../app/suratketeranganmodel';
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Apiservice } from '../../app/apiservice';

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
    return this.http.get(Apiservice.endpointapi+'/tmpsuratketerangan',options).map(res => res.json().data as suratketeranganmodel[]);
  }
  hapusdata(item):Observable<suratketeranganmodel[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let id = item.id;
    return this.http.delete(Apiservice.endpointapi+'/tmpsuratketerangan/'+id,options).map(res => res.json().data as suratketeranganmodel[]);
  }
  updatedata(item,data){
    let body = JSON.stringify(data);
    let id = item.id;
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.patch(Apiservice.endpointapi+'/tmpsuratketerangan/'+id,body,options).map(res => res.json().data as suratketeranganmodel[]);
  }
  dissparove(item,data){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    let id = item.id;
    //let body = JSON.stringify(data);
    return this.http.patch(Apiservice.endpointapi+'/tmpsuratketerangan/'+id,body,options).map(res => res.json().data as suratketeranganmodel[]);
  }
}
