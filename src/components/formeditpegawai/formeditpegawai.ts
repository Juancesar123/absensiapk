import { DatasiswaProvider } from './../../providers/datasiswa/datasiswa';
import { Component } from '@angular/core';
import { LoadingController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the FormeditpegawaiComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formeditpegawai',
  templateUrl: 'formeditpegawai.html'
})
export class FormeditpegawaiComponent {

  text: string;
  data;
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
  
  constructor(public toast: ToastController,public viewctrl: ViewController,public params: NavParams,public siswaservice :DatasiswaProvider,public loader: LoadingController) {
    console.log('Hello FormeditpegawaiComponent Component');
    this.text = 'Hello World';
    this.datauser = JSON.parse(localStorage.getItem('datauser'));  
    this.data = params.get('deviceNum');
    this.nama = this.data.Nama;
    this.alamat = this.data.Alamat;
    this.telepon = this.data.telepon;
    this.tanggallahir = this.data.TglLahir;
    this.tempatlahir = this.data.TempatLahir;
    this.jabatan = this.data.Jabatan;
    this.statuspegawai = this.data.StatusPegawai;
    this.statusmenikah = this.data.StatusNikah;
    this.nomorktp = this.data.NoKtp;
    this.nomorhp = this.data.HP;
    this.emailpribadi = this.data.emailPribadi;
    this.golongandarah = this.data.Goldar;
    this.nomorinduk = this.data.Nomor_Induk;
    this.agama = this.data.Agama;
    this.jenis = this.data.Jenis;
    
  }
  close(){
    this.viewctrl.dismiss();
  }
  private presentToast(text) {
    let toaster = this.toast.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toaster.present();
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
    
    let loadeing = this.loader.create({
      content: "Mohon Tunggu..."
    });
    loadeing.present();
    let id = this.data.id;
    this.siswaservice.updatedata(data,id).subscribe(val =>{
      loadeing.dismissAll()
        this.presentToast('Data Sukses Di Ubah');
    },err=>{
      loadeing.dismissAll()
      this.presentToast('data gagal di input');
    })
  }
}
