import { ForminputsuratketeranganComponent } from './../../components/forminputsuratketerangan/forminputsuratketerangan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the SuratketeranganPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suratketerangan',
  templateUrl: 'suratketerangan.html',
})
export class SuratketeranganPage {

  constructor(public viewctrl:ViewController, public modalctrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuratketeranganPage');
  }
  tambah(){
    let modalmuncul = this.modalctrl.create(ForminputsuratketeranganComponent);
    modalmuncul.present();
  }
}
