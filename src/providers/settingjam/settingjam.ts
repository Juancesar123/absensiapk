import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
//import{settingjamModel} from './settingjammodel';
import 'rxjs/add/operator/map';
import { settingjamModel } from '../../app/settingjammodel';
/*
  Generated class for the SettingjamProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingjamProvider {

  constructor(public http: Http) {
    console.log('Hello SettingjamProvider Provider');
  }
  simpandata(data){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post('http://198.50.174.117/settingjam',body,options).map(res => res.json().data as settingjamModel[]);
  }
  getdata(){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://198.50.174.117/settingjam',options).map(res => res.json().data as settingjamModel[]);
  }
  updatedata(data,id){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data)
    return this.http.put('http://198.50.174.117/settingjam/'+id,body,options).map(res => res.json().data as settingjamModel[]);
  }
}
