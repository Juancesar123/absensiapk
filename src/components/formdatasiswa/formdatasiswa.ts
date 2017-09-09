import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController,LoadingController} from 'ionic-angular';
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
  datasiswa;
  nomorinduk:string;
  data;
  constructor(public viewCtrl:ViewController,public siswaservice: DatapegawaiProvider,public loadingctrl:LoadingController,public params:NavParams) {
    console.log('Hello FormdatasiswaComponent Component');
    
   // this.text = 'Hello World';
  }
  getdata(){
    this.siswaservice.getdata().subscribe((result)=>this.datasiswa = result);
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
      foto:'23',
      golongandarah:this.golongandarah,
      emailpribadi:this.emailpribadi,
      nomorinduk:this.nomorinduk,
      hp:this.hp
    }
    this.siswaservice.simpandata(data).subscribe(val =>{
      let loader = this.loadingctrl.create({
        content: "Please wait...",
        duration: 3000,
      });
      loader.present();
      alert('okey')
    })
  }
}
