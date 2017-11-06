import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ViewdatapegawaiComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'viewdatapegawai',
  templateUrl: 'viewdatapegawai.html'
})
export class ViewdatapegawaiComponent {

 
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

  constructor(public params: NavParams, public viewctrl:ViewController) {
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

}
