import { DatasiswaProvider } from './../../providers/datasiswa/datasiswa';
import { Component } from '@angular/core';
import { ViewController, ToastController, LoadingController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormtambahpegawaiComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formtambahpegawai',
  templateUrl: 'formtambahpegawai.html'
})
export class FormtambahpegawaiComponent {
  text: string;
  nomorinduk:string
  nama:string;
  alamat:string;
  telepon:string;
  tanggallahir:string;
  tempatlahir:string;
  jabatan:string;
  statuspegawai:string;
  jenis:string;
  golongandarah:string;
  statusmenikah:string;
  nomorktp:string;
  nomorhp:string;
  emailpribadi:string;
  agama:string;
  nomortelepon:string;
  datauser;
  constructor(private toastCtrl: ToastController,public viewCtrl:ViewController,public siswaservice: DatasiswaProvider,public loadingctrl:LoadingController,public params:NavParams) {
    console.log('Hello FormtambahpegawaiComponent Component');
    this.text = 'Hello World';
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }
  close(){
    this.viewCtrl.dismiss();
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
    let data = {
      Nama:this.nama,
      Alamat:this.alamat,
      telepon:this.telepon,
      TglLahir:this.tanggallahir,
      TempatLahir:this.tempatlahir,
      Jabatan:this.jabatan,
      StatusPegawai:this.statuspegawai,
      StatusNikah:this.statusmenikah,
      NoKtp:this.nomorktp,
      HP:this.nomorhp,
      emailPribadi:this.emailpribadi,
      Status_Rec:'active',
      Foto:'defaultimage.png',
      Kode_Sekolah:this.datauser.kodesekolah,
      Goldar:this.golongandarah,
      Nomor_Induk:this.nomorinduk,
      Agama:this.agama,
      Jenis:this.jenis,
    }
    let loader = this.loadingctrl.create({
      content: "Mohon Tunggu..."
    });
    loader.present();
    this.siswaservice.simpandata(data).subscribe(val =>{
      loader.dismissAll()
        this.presentToast('Data Sukses Di simpan');
    },err=>{
      loader.dismissAll()
      this.presentToast('data gagal di input');
    })
  }
}
