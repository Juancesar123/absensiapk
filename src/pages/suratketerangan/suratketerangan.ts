import { FormeditsuratketeranganComponent } from './../../components/formeditsuratketerangan/formeditsuratketerangan';
import { SuratketeranganProvider } from './../../providers/suratketerangan/suratketerangan';
import { ForminputsuratketeranganComponent } from './../../components/forminputsuratketerangan/forminputsuratketerangan';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform, AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
/**
 * Generated class for the SuratketeranganPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-suratketerangan',
  templateUrl: 'suratketerangan.html',
  providers:[SuratketeranganProvider]
})
export class SuratketeranganPage implements OnInit{
  suratketerangan;
  datauser;
  storageDirectory: string = '';
  constructor(public modalCtrl : ModalController, public alertCtrl:AlertController,public platform: Platform,private transfer: Transfer,public file: File,public suratketeranganservice:SuratketeranganProvider,public viewctrl:ViewController, public modalctrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
        if(!this.platform.is('cordova')) {
          return false;
        }

        if (this.platform.is('ios')) {
          this.storageDirectory = cordova.file.documentsDirectory;
        }
        else if(this.platform.is('android')) {
          this.storageDirectory = cordova.file.dataDirectory;
        }
        else {
          // exit otherwise, but you could add further types here e.g. Windows
          return false;
        }
    });
  }
  ngOnInit(){
    this.suratketeranganservice.getdata().subscribe((result) => this.suratketerangan = result);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SuratketeranganPage');
  }
  tambah(){
    let modalmuncul = this.modalctrl.create(ForminputsuratketeranganComponent);
    modalmuncul.present();
  }
  refresh(){
    this.suratketeranganservice.getdata().subscribe((result) => this.suratketerangan = result);
    
  }
  
  download(item) {
    this.platform.ready().then(() => {  
    // const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/${Image}`;
    const fileTransfer: TransferObject = this.transfer.create();
    const url = item.gambar;
    const targetPath = cordova.file.documentsDirectory + Image;
    console.log( this.file.dataDirectory +  this.storageDirectory + Image);
    const imageLocation = `${cordova.file.applicationDirectory}www/assets/img/suratketerangan.jpg`;
    fileTransfer.download(url,this.file.dataDirectory + 'suratketerangan.jpg').then((entry) => {
        const alertSuccess = this.alertCtrl.create({
          title: `Download Succeeded!`,
          subTitle: `suratketerangan.jpg was successfully downloaded to: ${entry.toURL()}`,
          buttons: ['Ok']
        });
        alertSuccess.present();
    }, (error) => {
      console.log(JSON.stringify(error, null, 2))
          const alertFailure = this.alertCtrl.create({
            title: `Download Failed!`,
            subTitle: `${Image} was not successfully downloaded. Error code: ${error.code}`,
            buttons: ['Ok']
          });

          alertFailure.present();
      // handle error
    });
  })
}
getdata(){
  this.suratketeranganservice.getdata().subscribe((result) => this.suratketerangan = result);
  
}
hapus(item){
  this.suratketeranganservice.hapusdata(item).subscribe(val =>{
    const alertFailure = this.alertCtrl.create({
      title: `Sukses`,
      subTitle: `data sukses di hapus`,
      buttons: ['Ok']
    });

    alertFailure.present();
    this.getdata();
  })
}
edit(item){
  let profileModal = this.modalCtrl.create(FormeditsuratketeranganComponent,{deviceNum: item});
  profileModal.present();
}
}
