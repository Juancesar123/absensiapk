//import { HomePage } from './home';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user;
datauser;
  constructor(public navCtrl: NavController) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    if(localStorage.getItem('token')){
      
    }else{
      this.navCtrl.setRoot(LoginPage)
    }
    // console.log(this.user.id);
  }

}
