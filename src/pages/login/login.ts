import { MyApp } from './../../app/app.component';
import { ContactusPage } from './../contactus/contactus';
import { HomePage } from './../home/home';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Events } from 'ionic-angular';

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
  constructor(public event:Events,public navCtrl: NavController, public navParams: NavParams,public auth: AuthenticationProvider, public loadctrl:LoadingController, public toastctrl : ToastController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  contactus(){
    this.navCtrl.push(ContactusPage);
  }
  login(){
    let data = {nomorinduk:this.nomorinduk,password:this.password,strategy:'local'}
    let loading =  this.loadctrl.create({
      content:"Mohon Tunggu....",
      duration:2000
    })
    loading.present();
    let toast = this.toastctrl.create({
      message:"gagal cek username atau password",
      position:"top",
      duration:2000
    })
    let pending = this.toastctrl.create({
      message:'data anda belum di setujui',
      position:'top',
      duration:2000
    })

    let disaprove = this.toastctrl.create({
      message:'data anda tidak di setujui',
      position:'top',
      duration:2000
    })
    let insert ={
      huruf:this.password
    }
    this.auth.login(data).subscribe(val =>{
      localStorage.setItem('token',val.accessToken);
        this.auth.getuserdetail(data).subscribe(result =>{
          if(result.status == 0){
            pending.present();
          }else if(result.status == 2){
            disaprove.present();
          }else{
            localStorage.setItem('userid',result.id);
            localStorage.setItem('username',result.nama);
            localStorage.setItem('datauser',JSON.stringify(result));
            localStorage.setItem('huruf',JSON.stringify(insert));
            this.event.publish('login');
            this.navCtrl.setRoot(HomePage);
          }
        })   
      }, error =>{
        loading.onDidDismiss(function(){
          toast.present()
        })
      })
  }
}
