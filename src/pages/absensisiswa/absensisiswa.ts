import { LaporanabsensiProvider } from './../../providers/laporanabsensi/laporanabsensi';
import { SettingjamProvider } from './../../providers/settingjam/settingjam';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import moment from 'moment';
/**
 * Generated class for the AbsensisiswaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absensisiswa',
  templateUrl: 'absensisiswa.html',
  providers:[SettingjamProvider,LaporanabsensiProvider]
})
export class AbsensisiswaPage {
datauser;
tampungdata;
  constructor(public toastCtrl:ToastController,public loadctrl: LoadingController,public laporanservice: LaporanabsensiProvider,public setjamservice : SettingjamProvider,public toastctrl:ToastController,public network:Network,public navCtrl: NavController, public navParams: NavParams) {
    // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //   console.log('network was disconnected :-(');
    // });
    
    // // stop disconnect watch
    // disconnectSubscription.unsubscribe();
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsensisiswaPage');
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  absen(){
    let load = this.loadctrl.create({
      content:'Mohon Tunggu...'
    })
    load.present();
    this.laporanservice.getdata().subscribe(hasil =>{
      load.dismissAll();
      hasil.forEach(sekarepmu=>{
        if(sekarepmu.Tanggal == moment().format('YYYY-MM-DD') && sekarepmu.USERID == this.datauser.id){
          this.setjamservice.getdata().subscribe(result =>{
            // result[0].day
          
           let now = moment().format('dddd');
             result.forEach(obj =>{
               if(obj.kodesekolah == this.datauser.kodesekolah && obj.day == now){
                 // console.log(obj);
                // let now = moment().format('dddd');
                 let time = moment().format('HH:mm');
                   if(time > obj.starttime && time <= obj.endtime ){
                     let data = {
                       Nomor_Induk : this.datauser.nomorinduk,
                       USERID : this.datauser.id,
                       User_Acces : this.datauser.useracces,
                       Tanggal : moment().format('YYYY-MM-DD'),
                       Jam : moment().format('HH:mm:ss'),
                       Absen: '1',
                       Keterangan:'Hadir',
                       Status:'Masuk',
                       Hadir: '1',
                       Sakit:'0',
                       Sakit_SD:'0',
                       Ijin:'0',
                       Alpa:'0',
                       Cuti:'0',
                       Dinas:'0',
                       Keterlambatan:'0',
                       Pulang_Lebih_Awal:'0',
                       Foto_Ketidakhadiran:'0',
                       Status_Pengajuan_Ketidakhadiran:'0',
                       Kode_Sekolah:this.datauser.kodesekolah
                     }
                     this.laporanservice.simpandata(data).subscribe(val => {
                      //console.log('sok')
                      this.presentToast('Terimakasih sudah dikirim');
                      // this.presentToast('Terimakasih data sudah dikirim');
                     })
                   }else if(time <= obj.settime ){
                     let data = {
                       Nomor_Induk : this.datauser.nomorinduk,
                       USERID : this.datauser.id,
                       User_Acces : this.datauser.useracces,
                       Tanggal : moment().format('YYYY-MM-DD'),
                       Jam : moment().format('HH:mm:ss'),
                       Absen: '1',
                       Keterangan:'Hadir',
                       Status:'Masuk',
                       Hadir: '1',
                       Sakit:'0',
                       Sakit_SD:'0',
                       Ijin:'0',
                       Alpa:'0',
                       Cuti:'0',
                       Dinas:'0',
                       Keterlambatan:'1',
                       Pulang_Lebih_Awal:'0',
                       Foto_Ketidakhadiran:'0',
                       Status_Pengajuan_Ketidakhadiran:'0',
                       Kode_Sekolah:this.datauser.kodesekolah
                     }
                     this.laporanservice.simpandata(data).subscribe(val => {
                       this.presentToast('data sudah dikirim, anda telat');
                    //console.log('micin')
                     });
                   }else{
                     this.presentToast('Jam Absen Sudah Abis');
                    // console.log('lele')
                   }
                // console.log(obj);
               }
             })
           })
        }
      })
    })
  
  }

}
