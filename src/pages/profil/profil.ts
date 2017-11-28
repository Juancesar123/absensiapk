import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormubahprofilComponent } from "../../components/formubahprofil/formubahprofil";

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalctrl: ModalController) {
    this.alldata = JSON.parse(localStorage.getItem('datauser'));
    this.gambar = this.alldata.gambar;
    this.nama = this.alldata.nama;
    this.nomorinduk = this.alldata.nomorinduk;
    this.useraccess = this.alldata.useracces;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  update(){
   let profileModal = this.modalctrl.create(FormubahprofilComponent);
    profileModal.present();
  }
}
