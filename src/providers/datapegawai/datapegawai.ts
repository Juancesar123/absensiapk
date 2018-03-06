import { Datasiswamodel } from './../../app/datasiswamodel';
import { Injectable } from '@angular/core';
import { Http ,RequestOptions,Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Apiservice } from '../../app/apiservice';

/*
  Generated class for the DatapegawaiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatapegawaiProvider {

  constructor(public http: Http) {
    console.log('Hello DatapegawaiProvider Provider');
  }
 getdata() : Observable<Datasiswamodel[]> {
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
     return this.http.get(Apiservice.endpointapi+"/datasiswa",options).map(res => res.json() as Datasiswamodel[]);
  }
  simpandata(data):Observable<Datasiswamodel[]> {
     let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
     let options = new RequestOptions({headers:header});
     let body = JSON.stringify(data);
     return this.http.post(Apiservice.endpointapi+"/datasiswa",body,options).map(res => res.json() as Datasiswamodel[]);
  }
  hapusdata(item): Observable<Datasiswamodel[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = item.id
    return this.http.delete(Apiservice.endpointapi+"/datasiswa/"+body,options).map(res => res.json() as Datasiswamodel[]);
  }
  updatedata(data,id){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.patch(Apiservice.endpointapi+"/datasiswa/"+id,body,options).map(res => res.json() );
  }
  getdetail(param){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    //let body = JSON.stringify(data);
    return this.http.get(Apiservice.endpointapi+"/datasiswa/"+param,options).map(res => res.json());
  }
  
}
