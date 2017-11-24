import { LaporanabsensiProvider } from './../../providers/laporanabsensi/laporanabsensi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  total;
  constructor(public navCtrl: NavController, public navParams: NavParams,public laporanservice:LaporanabsensiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporanabsensiPage');
  }
  simpan(){
    this.laporanservice.getdata().subscribe(result => {
      //console.log(this.tanggalawal);
      result.forEach(val=>{
          if(val.Tanggal == this.tanggalawal || val.Tanggal == this.tanggalakhir){
            this.total += val.Sakit;
            console.log(val);
            console.log(this.total)
          }
      })
    })
  }
}
