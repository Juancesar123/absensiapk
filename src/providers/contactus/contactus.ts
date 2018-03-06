import { datapersonModel } from './../../app/datapersonModel';
import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Apiservice } from '../../app/apiservice';

/*
  Generated class for the ContactusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactusProvider {

  constructor(public http: Http) {
    console.log('Hello ContactusProvider Provider');
  }
  getdata() : Observable<datapersonModel[]> {
    let header = new Headers({'Authorization':localStorage.getItem('token')});
    let options = new RequestOptions({headers:header});
     return this.http.get(Apiservice.endpointapi+"/dataperson",options).map(res => res.json().data as datapersonModel[]);
  }
}
