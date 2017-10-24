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
  datauser:any;
  constructor(public http: Http) {
    console.log('Hello SettingjamProvider Provider');
  }
   simpandata(data){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data);
    return this.http.post('http://localhost:3030/settingjam',body,options).map(res => res.json().data as settingjamModel[]);
  }
  getdata(){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.get('http://localhost:3030/settingjam',options).map(res => res.json().data as settingjamModel[]);
  }
  hapusdata(item){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    return this.http.delete('http://localhost:3030/settingjam/'+item.id,options).map(res => res.json().data as settingjamModel[]);
  }
  updatedata(data,id){
    let header = new Headers({'Content-Type':'Application/json','Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
    let body = JSON.stringify(data)
    return this.http.put('http://localhost:3030/settingjam/'+id,body,options).map(res => res.json().data as settingjamModel[]);
  }
}
