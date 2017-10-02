import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  alldata;
  gambar:string;
  nama:string;
  nomorinduk:string;
  useraccess:string;
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alldata = JSON.parse(localStorage.getItem('datauser'));
    this.gambar = this.alldata.gambar;
    this.nama = this.alldata.nama;
    this.nomorinduk = this.alldata.nomorinduk;
    this.useraccess = this.alldata.useracces;
    this.title = this.alldata.title
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
