import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LoadingController, ToastController, ViewController, Events } from 'ionic-angular';
import { MasterkelasProvider } from './../../providers/masterkelas/masterkelas';
import { Component } from '@angular/core';

/**
 * Generated class for the FormtambahkelasComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formtambahkelas',
  templateUrl: 'formtambahkelas.html',
  providers:[MasterkelasProvider]
})
export class FormtambahkelasComponent {

  kelas: string;
  kodesekolah:string;
  datauser:any;
  constructor(public events:Events,public kelasprovider: MasterkelasProvider, public loadctrl: LoadingController, public toastcontroll: ToastController, public viewctrl: ViewController) {
   
  }
  simpan(){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    let data = {
      kelas:this.kelas,
      kode_sekolah:this.datauser.kodesekolah
    }
    this.kelasprovider.simpandata(data).subscribe(val =>{
      this.events.publish('simpandatakelas')
       let loadpresnt = this.loadctrl.create({
          content:'Mohon Tunggu',
          duration: 3000,
       })
       let toastaja = this.toastcontroll.create({
        message: 'data sukses di input',
        duration: 3000,
        position: 'top'
      })
       loadpresnt.present();
       loadpresnt.onDidDismiss(function(){
          
          toastaja.present();
       })
    })
  }
  close(){
    this.viewctrl.dismiss();
  }
}
