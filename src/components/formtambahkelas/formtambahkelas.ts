import { LoadingController, ToastController, ViewController } from 'ionic-angular';
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
  constructor(public kelasprovider: MasterkelasProvider, public loadctrl: LoadingController, public toastcontroll: ToastController, public viewctrl: ViewController) {
   
  }
  simpan(){
    let data = {
      kelas:'23S',
      kode_sekolah:'23'
    }
    this.kelasprovider.simpandata(data).subscribe(val =>{
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
