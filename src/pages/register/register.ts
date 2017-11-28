import { ContactusPage } from './../contactus/contactus';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

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
  email:string;
  nomorhp:string;
  namasekolah:string;
  constructor(private uniqueDeviceID: UniqueDeviceID,public navCtrl: NavController, public navParams: NavParams,public auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
      //fungsi untuk mengambl device id atau imei handphone
      let deviceid = this.uniqueDeviceID.get();      
      let data = {
      nomorinduk:this.nomorinduk,
      uid:'0',
      email:this.email,
      nomorhp:this.nomorhp,
      nama:this.nama,
      useracces:this.useraccess,
      title: this.useraccess,
      namasekolah:this.namasekolah,
      kodesekolah:this.kodesekolah,
      password:this.password,
      gambar:'http://198.50.174.117/defaultimage.png',
      //deviceid:deviceid,
      status:'0',
    }
    this.auth.daftar(data).subscribe(val=>{
      this.navCtrl.pop();
    })
  }
  contactus(){
    this.navCtrl.push(ContactusPage);
  }
}
