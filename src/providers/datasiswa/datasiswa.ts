import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { DatapegawaiModel } from '../../app/DatapegawaiModel';
import { Observable } from 'rxjs/Observable';
import { Apiservice } from '../../app/apiservice';

/*
  Generated class for the DatasiswaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatasiswaProvider {

  constructor(public http: Http) {
    console.log('Hello DatasiswaProvider Provider');
  }
  getdata() : Observable<DatapegawaiModel[]> {
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
     return this.http.get(Apiservice.endpointapi+"/pegawai",options).map(res => res.json().data as DatapegawaiModel[]);
  }
  simpandata(data):Observable<DatapegawaiModel[]> {
     let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
     let options = new RequestOptions({headers:header});
     let body = JSON.stringify(data);
     return this.http.post(Apiservice.endpointapi+"/pegawai",body,options).map(res => res.json().data as DatapegawaiModel[]);
  }
  hapusdata(item): Observable<DatapegawaiModel[]>{
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = item.id
    return this.http.delete(Apiservice.endpointapi+"/pegawai/"+body,options).map(res => res.json().data as DatapegawaiModel[]);
  }
  updatedata(data,id){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.patch(Apiservice.endpointapi+"/pegawai/"+id,body,options).map(res => res.json().data );
  }
  getdetail(param){
    let header = new Headers({'content-Type':'application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    //let body = JSON.stringify(data);
    return this.http.get(Apiservice.endpointapi+"/pegawai/"+param,options).map(res => res.json().data);
  }
}
