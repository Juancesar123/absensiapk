import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { ViewController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the ViewdatasiswaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'viewdatasiswa',
  templateUrl: 'viewdatasiswa.html',
  providers:[DatapegawaiProvider]
})
export class ViewdatasiswaComponent implements OnInit {
  listdata;
  text: string;
  data;
  nama: string;
  alamat: string;
  telepon: string;
  tanggallahir: string;
  tempatlahir: string;
  agama: string;
  kelas: string;
  jenis: string;
  ayah: string;
  ibu: string;
  nomorhpibu: string;
  nomorhpayah: string;
  hp :string;
  status: string;
  kodesekolah: string;
  foto: string;
  golongandarah: string;
  emailpribadi: string;
  datasiswa;
  nomorinduk:string;
  statusrec:string;
  id:string;
  constructor(public viewctrl: ViewController, public siswaservice : DatapegawaiProvider, public params: NavParams) {
    console.log('Hello ViewdatasiswaComponent Component');
    this.text = 'Hello World';
  
  }
  ngOnInit(){
    this.data = this.params.get('deviceNum');
    let param = this.data.id
    this.siswaservice.getdetail(param).subscribe(val => {
      this.nama = val.nama;
      this.kelas = val.idkelas;
      this.agama = val.idagama;
      this.jenis = val.jenis;
      this.ayah = val.ayah;
      this.ibu = val.ibu;
      this .nomorhpibu = val.nomorhpibu;
      this.hp = val.hp;
      this.status = val.status;
      this.kodesekolah = val.kodesekolah;
      this.golongandarah = val.golongandarah;
      this.emailpribadi = val.emailpribadi;
      this.nomorinduk = val.nomorinduk;
      this.tanggallahir = val.tanggallahir;
      this.tempatlahir = val.tempatlahir;
      this.alamat = val.alamat;
      this.nomorhpayah = val.nomorhpayah;
      this.telepon = val.telepon;
      this.statusrec = val.statusrec;
      this.id = val.id;
    })
  }
  close(){
    this.viewctrl.dismiss()
  }
}
