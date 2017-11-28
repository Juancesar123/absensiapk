import { LaporanabsensiProvider } from './../../providers/laporanabsensi/laporanabsensi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LaporanabsensiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laporanabsensi',
  templateUrl: 'laporanabsensi.html',
  providers:[LaporanabsensiProvider]
})
export class LaporanabsensiPage {
  tanggalawal:String;
  tanggalakhir:String;
  totalhadir:any = 0;
  priceTotal;
  datauser;
  totalsakit :any = 0;
  totalsakitSD :any = 0;
  ijin :any = 0;
  alpa :any = 0;
  cuti :any = 0;
  dinas :any = 0;
  constructor(public toastCtrl:ToastController,public loadingctrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public laporanservice:LaporanabsensiProvider) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  simpan(){
    let loading = this.loadingctrl.create({
      content: 'Sedang Menghitung...',
    })
    loading.present();
    this.laporanservice.getdata().subscribe(result => {
      loading.dismissAll();
      result.forEach(val=>{
        if(val.USERID == this.datauser.id){
          if(val.Tanggal == this.tanggalawal || val.Tanggal == this.tanggalakhir){
            this.totalhadir = this.totalhadir + Number(val.Hadir);
            this.totalsakit = this.totalsakit + Number(val.Sakit);
            this.totalsakitSD = this.totalsakit + Number(val.Sakit_SD);
            this.ijin = this.totalsakit + Number(val.Ijin);
            this.totalsakit = this.totalsakit + Number(val.Sakit);
            this.alpa = this.totalsakit + Number(val.Alpa);
            this.cuti = this.totalsakit + Number(val.Cuti);
            this.dinas = this.totalsakit + Number(val.Dinas);
        }else{
          return false;
        }
        }
      })
    })
  }
}
