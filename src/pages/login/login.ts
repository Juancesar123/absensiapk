import { HomePage } from './../home/home';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthenticationProvider, public loadctrl:LoadingController, public toastctrl : ToastController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  login(){
    let data = {nomorinduk:this.nomorinduk,password:this.password,strategy:'local'}
    let loading =  this.loadctrl.create({
      content:"Mohon Tunggu....",
      duration:2000
    })
    loading.present();
    let toast = this.toastctrl.create({
      message:"gagal cek username / password",
      position:"top"
    })
    this.auth.login(data).subscribe(val =>{
      localStorage.setItem('token',val.accessToken);
        this.auth.getuserdetail(data).subscribe(result =>{
          localStorage.setItem('userid',result.id);
          localStorage.setItem('username',result.nama);
          localStorage.setItem('datauser',JSON.stringify(result));
          this.navCtrl.setRoot(HomePage);
        })   
      }, error =>{
        loading.onDidDismiss(function(){
          toast.present()
        })
      })
  }
}
