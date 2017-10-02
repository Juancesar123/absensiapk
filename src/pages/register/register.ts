import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AuthenticationProvider]
})
export class RegisterPage {
  nomorinduk:String;
  nama:String;
  useraccess:String;
  kodesekolah:String;
  password:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
      let data = {
      nomorinduk:this.nomorinduk,
      uid:'0',
      nama:this.nama,
      useracces:this.useraccess,
      title:'Administrator',
      kodesekolah:this.kodesekolah,
      password:this.password,
      gambar:'defaultimage.png',
      status:'0',
    }
    this.auth.daftar(data).subscribe(val=>{
      this.navCtrl.pop();
    })
  }
}
