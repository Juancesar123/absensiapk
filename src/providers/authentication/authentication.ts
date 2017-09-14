import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
  
@Injectable()

export class AuthenticationProvider {

  constructor(public http: Http) {
    console.log('Hello AuthenticationProvider Provider');
  }
  daftar(data){
    // fungsi ini untuk define header format apakah format datanya json atau text atau lainnya
    let header = new Headers({'content-Type':'application/json'});
    let options = new RequestOptions({headers:header});
    // si variable data tadi di convert menjadi json.stringify
    let body = JSON.stringify(data);
    /* fungsi ini ngepost data email dan password di api apakah ada. di api akan di cek datanya
       lalu di return hasilnya dan di convert ke JSON
    */
    return this.http.post('http://localhost:3030/users',body,options).map(res => res.json());

  }
  login(data){
     let header = new Headers({'content-Type':'application/json'});
    let options = new RequestOptions({headers:header});
    // si variable data tadi di convert menjadi json.stringify
    let body = JSON.stringify(data);
    /* fungsi ini ngepost data email dan password di api apakah ada. di api akan di cek datanya
       lalu di return hasilnya dan di convert ke JSON
    */
    return this.http.post('http://localhost:3030/authentication',body,options).map(res => res.json());
  }
}
