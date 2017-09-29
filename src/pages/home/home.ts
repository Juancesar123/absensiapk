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
  constructor(public navCtrl: NavController) {
    if(localStorage.getItem('token')){
      
    }else{
      this.navCtrl.setRoot(LoginPage)
    }
    // console.log(this.user.id);
  }

}
