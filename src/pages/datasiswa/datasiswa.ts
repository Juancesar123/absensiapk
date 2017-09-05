import { FormdatasiswaComponent } from './../../components/formdatasiswa/formdatasiswa';
import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
/**
 * Generated class for the DatasiswaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datasiswa',
  templateUrl: 'datasiswa.html',
  providers:[DatapegawaiProvider]
})
export class DatasiswaPage {
  datasiswa;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public siswaservice: DatapegawaiProvider,public modalCtrl: ModalController) {
  }
   ngOnInit(){
     this.siswaservice.getdata().subscribe((result) => this.datasiswa = result)
  }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatasiswaPage');
  }
  tambah(){
      let profileModal = this.modalCtrl.create(FormdatasiswaComponent);
      profileModal.present();
  }
  
}
