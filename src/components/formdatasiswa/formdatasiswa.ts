import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
/**
 * Generated class for the FormdatasiswaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formdatasiswa',
  templateUrl: 'formdatasiswa.html',
  providers:[DatapegawaiProvider]
})
export class FormdatasiswaComponent {
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
  nomorinduk:string;
  constructor(public viewCtrl:ViewController,public datasiswa: DatapegawaiProvider) {
    console.log('Hello FormdatasiswaComponent Component');
    this.text = 'Hello World';
  }
close(){
    this.viewCtrl.dismiss();
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
      foto:this.foto,
      golongandarah:this.golongandarah,
      emailpribadi:this.emailpribadi,
      nomorinduk:this.nomorinduk,
      hp:this.hp
    }
    this.datasiswa.simpandata(data).subscribe(val =>{
      this.viewCtrl.dismiss();
    })
  }
}
