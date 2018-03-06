import { NavParams, ViewController, ToastController, LoadingController, Events } from 'ionic-angular';
import { MasterkelasProvider } from './../../providers/masterkelas/masterkelas';
import { Component } from '@angular/core';

/**
 * Generated class for the FormeditkelasComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formeditkelas',
  templateUrl: 'formeditkelas.html',
  providers:[MasterkelasProvider]
})
export class FormeditkelasComponent {
  kelas:string;
  kodesekolah:string;
  text: string;
  data;
  id:string;
  datauser:any;
  constructor(public events:Events,public kelasservice : MasterkelasProvider, public params: NavParams, public viewctrl : ViewController,public toastctrl : ToastController, public loadctrl: LoadingController) {
    console.log('Hello FormeditkelasComponent Component');
    this.text = 'Hello World';
    this.data = params.get('deviceNum');
    this.kelas = this.data.kelas;
    this.kodesekolah = this.data.kode_sekolah;
    this.id = this.data.id;

  }
  simpan(){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
   
    let data = {
      kelas:this.kelas,
      kode_sekolah:this.datauser.kodesekolah
    }
    let id = this.id
    this.kelasservice.updatedata(data,id).subscribe(val => {
      this.events.publish('ubahdatakelas');
      let loadingaja = this.loadctrl.create({
        content:'mohon tunggu',
        duration: 2000
      })
      loadingaja.present();
      let toastaja = this.toastctrl.create({
        message:'Data sukses di ubah',
        duration:2000,
        position:'top'
      })
      loadingaja.onDidDismiss(function(){
        toastaja.present();
      })
    })
  }
  close(){
    this.viewctrl.dismiss();
  }
}
