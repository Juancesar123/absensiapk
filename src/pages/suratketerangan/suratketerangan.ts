import { LaporanabsensiProvider } from './../../providers/laporanabsensi/laporanabsensi';
import { Laporanabsensimodel } from './../../app/Laporanabsensimodel';
import { ForminputketeranganadminComponent } from './../../components/forminputketeranganadmin/forminputketeranganadmin';
import { FormeditsuratketeranganComponent } from './../../components/formeditsuratketerangan/formeditsuratketerangan';
import { SuratketeranganProvider } from './../../providers/suratketerangan/suratketerangan';
import { ForminputsuratketeranganComponent } from './../../components/forminputsuratketerangan/forminputsuratketerangan';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform, AlertController, ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import moment from 'moment';
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
  providers:[SuratketeranganProvider,LaporanabsensiProvider]
})
export class SuratketeranganPage implements OnInit{
  suratketerangan;
  datauser;
  storageDirectory: string = '';
  constructor(public laporanabsensi:LaporanabsensiProvider,public toastCtrl:ToastController,public modalCtrl : ModalController, public alertCtrl:AlertController,public platform: Platform,private transfer: Transfer,public file: File,public suratketeranganservice:SuratketeranganProvider,public viewctrl:ViewController, public modalctrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
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
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SuratketeranganPage');
  }
  tambah(){
    if(this.datauser.useracces =='admin'){
      let modalmuncul = this.modalctrl.create(ForminputketeranganadminComponent);
      modalmuncul.present();
    }else{
      let modalmuncul = this.modalctrl.create(ForminputsuratketeranganComponent);
      modalmuncul.present();
    }  
  }
  refresh(){
    this.suratketeranganservice.getdata().subscribe((result) => this.suratketerangan = result);
    
  }
  approve(item){
    let data = {"nama":item.nama,"keterangan":item.keterangan,"note":item.note,"gambar":item.gambar,"status" : "approve" ,"nomorinduk" :item.nomorinduk,"userid":item.userid,"useracces":item.useracces};
    this.suratketeranganservice.updatedata(item,data).subscribe(val =>{
      if(item.keterangan == 'sakit'){
        let data1 =  {
          "nama":item.nama,
          "keterangan":item.keterangan,
          "note":item.note,
          "gambar":item.gambar
          ,"status" : "approve" ,
          "Nomor_Induk" :item.nomorinduk,
          "USERID":item.userid,
          "User_Acces":item.useracces,
          "Tanggal":moment().format('YYYY-MM-DD'),
          "Jam" : moment().format('HH:mm'),
          "Absen":'1',
          "Keterangan" :'Sakit Dengan Surat Dokter',
          "Status" : "None",
          "Hadir" : "0",
          "Sakit" : '0',
          "Sakit_SD":'1',
          "Ijin":'0',
          "Alpa":'0',
          "Cuti":'0',
          "Dinas":'0',
          "Keterlambatan":'0',
          "Pulang_Lebih_Awal":'0',
          "Foto_Ketidakhadiran":item.gambar,
          "Status_Pengajuan_Ketidakhadiran":'0',
          "Kode_Sekolah":item.kodesekolah
        };
        this.laporanabsensi.simpandata(data1).subscribe(val =>{
          this.presentToast('Data Sukses Di Input');
          this.getdata()
        })
      }else if(item.keterangan == 'cuti'){
        let data1 =  {
          "nama":item.nama,
          "keterangan":item.keterangan,
          "note":item.note,
          "gambar":item.gambar
          ,"status" : "approve" ,
          "Nomor_Induk" :item.nomorinduk,
          "USERID":item.userid,
          "User_Acces":item.useracces,
          "Tanggal":moment().format('YYYY-MM-DD'),
          "Jam" : moment().format('HH:mm'),
          "Absen":'1',
          "Keterangan" :'Sakit Dengan Surat Dokter',
          "Status" : "None",
          "Hadir" : "0",
          "Sakit" : '0',
          "Sakit_SD":'0',
          "Ijin":'0',
          "Alpa":'0',
          "Cuti":'1',
          "Dinas":'0',
          "Keterlambatan":'0',
          "Pulang_Lebih_Awal":'0',
          "Foto_Ketidakhadiran":item.gambar,
          "Status_Pengajuan_Ketidakhadiran":'0',
          "Kode_Sekolah":item.kodesekolah
        };
        this.laporanabsensi.simpandata(data1).subscribe(val =>{
          this.presentToast('Data Sukses Di Input');
          this.getdata()
        })
      }else if(item.keterangan == 'ijin'){
        let data1 =  {
          "nama":item.nama,
          "keterangan":item.keterangan,
          "note":item.note,
          "gambar":item.gambar
          ,"status" : "approve" ,
          "Nomor_Induk" :item.nomorinduk,
          "USERID":item.userid,
          "User_Acces":item.useracces,
          "Tanggal":moment().format('YYYY-MM-DD'),
          "Jam" : moment().format('HH:mm'),
          "Absen":'1',
          "Keterangan" :'Sakit Dengan Surat Dokter',
          "Status" : "None",
          "Hadir" : "0",
          "Sakit" : '0',
          "Sakit_SD":'0',
          "Ijin":'1',
          "Alpa":'0',
          "Cuti":'0',
          "Dinas":'0',
          "Keterlambatan":'0',
          "Pulang_Lebih_Awal":'0',
          "Foto_Ketidakhadiran":item.gambar,
          "Status_Pengajuan_Ketidakhadiran":'0',
          "Kode_Sekolah":item.kodesekolah
        };
        this.laporanabsensi.simpandata(data1).subscribe(val =>{
          this.presentToast('Data Sukses Di Input');
          this.getdata();
        })
      }else if(item.keterangan == 'dinas'){
        let data1 =  {
          "nama":item.nama,
          "keterangan":item.keterangan,
          "note":item.note,
          "gambar":item.gambar
          ,"status" : "approve" ,
          "Nomor_Induk" :item.nomorinduk,
          "USERID":item.userid,
          "User_Acces":item.useracces,
          "Tanggal":moment().format('YYYY-MM-DD'),
          "Jam" : moment().format('HH:mm'),
          "Absen":'1',
          "Keterangan" :'Sakit Dengan Surat Dokter',
          "Status" : "None",
          "Hadir" : "0",
          "Sakit" : '0',
          "Sakit_SD":'0',
          "Ijin":'0',
          "Alpa":'0',
          "Cuti":'0',
          "Dinas":'1',
          "Keterlambatan":'0',
          "Pulang_Lebih_Awal":'0',
          "Foto_Ketidakhadiran":item.gambar,
          "Status_Pengajuan_Ketidakhadiran":'0',
          "Kode_Sekolah":item.kodesekolah
        };
        this.laporanabsensi.simpandata(data1).subscribe(val =>{
          this.presentToast('Data Sukses Di Input');
          this.getdata();
        })
      }else{
        this.presentToast('Gagal');
      }
    })
  }
  disaprove(item){
    let data = {"nama":item.nama,"keterangan":item.keterangan,"note":item.note,"gambar":item.gambar,"status" : "disapprove" };
    this.suratketeranganservice.dissparove(item,data).subscribe(val =>{
      this.presentToast('data sukses di ubah');
      this.getdata();
    })
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
