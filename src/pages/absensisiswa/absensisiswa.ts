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
    this.setjamservice.getdata().subscribe(result =>{
    load.dismissAll();
      result.forEach(obj =>{
        if(obj.kodesekolah == this.datauser.kodesekolah ){
          let now = moment().format('dddd');
          let time = moment().format('hh:mm');
          if(obj.day == now){
            if(time > obj.starttime){
              let data = {
                Nomor_Induk : this.datauser.nomorinduk,
                USERID : this.datauser.id,
                User_Acces : this.datauser.useracces,
                Tanggal : moment().format('L'),
                Jam : moment().format('hh:mm'),
                Absen: '1',
                Keterangan:'Hadir',
                Status:'Masuk',
                Hadir: '1',
              }
              this.laporanservice.simpandata(data).subscribe(val => {
               
               // this.presentToast('Terimakasih data sudah dikirim');
              })
            }else if(obj.settime < time){
              this.presentToast('Jam Absen Sudah Lewat');
            }else{
              this.presentToast('Jam Absen Sudah Abis');
            }
          }
         // console.log(obj);
        }else{
          this.presentToast('Sekolah Belum Setting Absensi');
        }
      })
    })
  }

}
