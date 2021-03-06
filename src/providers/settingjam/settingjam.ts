import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
//import{settingjamModel} from './settingjammodel';
import 'rxjs/add/operator/map';
import { settingjamModel } from '../../app/settingjammodel';
import { Apiservice } from '../../app/apiservice';
/*
  Generated class for the SettingjamProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingjamProvider {
  datauser:any;
  constructor(public http: Http) {
    console.log('Hello SettingjamProvider Provider');
  }
   simpandata(data){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post(Apiservice.endpointapi+'/settingjam',body,options).map(res => res.json() as settingjamModel[]);
  }
  getdata(){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get(Apiservice.endpointapi+'/settingjam',options).map(res => res.json() as settingjamModel[]);
  }
  hapusdata(item){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.delete(Apiservice.endpointapi+'/settingjam/'+item.id,options).map(res => res.json() as settingjamModel[]);
  }
  updatedata(data,id){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data)
    return this.http.put(Apiservice.endpointapi+'/settingjam/'+id,body,options).map(res => res.json() as settingjamModel[]);
  }
}
