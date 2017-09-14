import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { NavParams,ViewController} from 'ionic-angular';

/**
 * Generated class for the FormeditsiswaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formeditsiswa',
  templateUrl: 'formeditsiswa.html',
  providers:[DatapegawaiProvider]
})
export class FormeditsiswaComponent {
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
  text:string;
  datasiswa;
  nomorinduk:string;
  statusrec:string;
  id:string;
  data;

  constructor(public viewctrl: ViewController,public params: NavParams,public siswaservice :DatapegawaiProvider) {
    console.log('Hello FormeditsiswaComponent Component');
    this.text = 'Hello World';
    this.data = params.get('deviceNum');
    this.nama = this.data.nama;
    this.kelas = this.data.idkelas;
    this.agama = this.data.idagama;
    this.jenis = this.data.jenis;
    this.ayah = this.data.ayah;
    this.ibu = this.data.ibu;
    this .nomorhpibu = this.data.nomorhpibu;
    this.hp = this.data.hp;
    this.status = this.data.status;
    this.kodesekolah = this.data.kodesekolah;
    this.golongandarah = this.data.golongandarah;
    this.emailpribadi = this.data.emailpribadi;
    this.nomorinduk = this.data.nomorinduk;
    this.tanggallahir = this.data.tanggallahir;
    this.tempatlahir = this.data.tempatlahir;
    this.alamat = this.data.alamat;
    this.nomorhpayah = this.data.nomorhpayah;
    this.telepon = this.data.telepon;
    this.statusrec = this.data.statusrec;
    this.id = this.data.id;
  }
  close(){
    this.viewctrl.dismiss();
  }
  simpan(){
    let data = {
      nama:this.nama,
      alamat:this.alamat,
      telepon:this.telepon,
      tanggallahir:this.tanggallahir,
      tempatlahir:this.tempatlahir,
      idagama:this.agama,
      idkelas:this.kelas,
      jenis:this.jenis,
      ayah:this.ayah,
      ibu:this.ibu,
      nomorhpayah:this.nomorhpayah,
      nomorhpibu:this.nomorhpibu,
      statusrec:this.status,
      kodesekolah:this.kodesekolah,
      foto:'23',
      golongandarah:this.golongandarah,
      emailpribadi:this.emailpribadi,
      nomorinduk:this.nomorinduk,
      hp:this.hp,
    }
    let id = this.id;
    this.siswaservice.updatedata(data,id).subscribe(val=>{

    })
  }

}
