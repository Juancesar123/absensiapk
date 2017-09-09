import { FormeditsiswaComponent } from './../../components/formeditsiswa/formeditsiswa';
import { FormdatasiswaComponent } from './../../components/formdatasiswa/formdatasiswa';
import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
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
  providers:[DatapegawaiProvider,FormdatasiswaComponent]
})
export class DatasiswaPage  implements OnInit {
  platform: any;
  datasiswa;
  ngOnInit(){
    this.siswaservice.getdata().subscribe((result) => this.datasiswa = result)
 }  
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public siswaservice: DatapegawaiProvider,public modalCtrl: ModalController,public actionctrl:ActionSheetController,public formaja : FormdatasiswaComponent) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatasiswaPage');
  }
  tambah(){
      let profileModal = this.modalCtrl.create(FormdatasiswaComponent);
      profileModal.present();
  }
  presentActionSheet(item) {
    let actionSheet = this.actionctrl.create({
      title: 'Action',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.siswaservice.hapusdata(item).subscribe((result)=>this.datasiswa = result)
          }
        },
        {
          text: 'Update',
          handler: () => {
            let profileModal = this.modalCtrl.create(FormeditsiswaComponent,{deviceNum: item});
            profileModal.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
