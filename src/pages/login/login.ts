import { HomePage } from './../home/home';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AuthenticationProvider]
})
export class LoginPage {
  nomorinduk:String;
  password:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  login(){
    let data = {nomorinduk:this.nomorinduk,password:this.password,strategy:'local'}
    this.auth.login(data).subscribe(val =>{
        //console.log(val.accessToken)
        localStorage.setItem('token',val.accessToken);
        this.navCtrl.setRoot(HomePage);
    })
  }
}
