import { ViewdatapegawaiComponent } from './../../components/viewdatapegawai/viewdatapegawai';
import { FormeditpegawaiComponent } from './../../components/formeditpegawai/formeditpegawai';
import { FormtambahpegawaiComponent } from './../../components/formtambahpegawai/formtambahpegawai';
import { DatasiswaProvider } from './../../providers/datasiswa/datasiswa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController } from 'ionic-angular';
import { DatapegawaiProvider } from '../../providers/datapegawai/datapegawai';

/**
 * Generated class for the DatapegawaiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datapegawai',
  templateUrl: 'datapegawai.html',
  providers:[DatapegawaiProvider]
})
export class DatapegawaiPage {
  platform: any;
  datapegawai;
  items;
  datauser;
  ngOnInit(){
    this.pegawaiservice.getdata().subscribe((result) => this.datapegawai = result);
 }  
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public pegawaiservice: DatasiswaProvider,public modalCtrl: ModalController,public actionctrl:ActionSheetController) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatasiswaPage');
  }
  tambah(){
      let profileModal = this.modalCtrl.create(FormtambahpegawaiComponent);
      profileModal.present();
  }
  refresh(){
    this.pegawaiservice.getdata().subscribe((result) => this.datapegawai = result)
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
            this.pegawaiservice.hapusdata(item).subscribe(val =>{
              this.refresh();
            })
          }
        },
        {
          text: 'Update',
          handler: () => {
            let profileModal = this.modalCtrl.create(FormeditpegawaiComponent,{deviceNum: item});
            profileModal.present();
          }
        },
        {
          text: 'View',
          handler: () => {
            let profileModal = this.modalCtrl.create(ViewdatapegawaiComponent,{deviceNum: item});
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
