import { LoadingController, ToastController, ViewController } from 'ionic-angular';
import { UseraccessProvider } from './../../providers/useraccess/useraccess';
import { Component } from '@angular/core';

/**
 * Generated class for the FormtambahuseraccessComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formtambahuseraccess',
  templateUrl: 'formtambahuseraccess.html',
  providers:[UseraccessProvider]
})
export class FormtambahuseraccessComponent {

  text: string;
  useraccess:string;
  kodesekolah:string;
  datauser:any;
  constructor(public useraccessservice : UseraccessProvider, public loadctrl: LoadingController, public toast:ToastController,public viewctrl: ViewController) {
   
  }
  simpan(){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    let data = {
      user_access : this.useraccess,
      kode_sekolah : this.datauser.kodesekolah
    }
    let loading = this.loadctrl.create({
      content: "Mohon Tunggu..."
    })
    let toastaja = this.toast.create({
      message:'Data sukses di simpan',
      duration : 2000,
      position:'top'
    })
    loading.present()
    this.useraccessservice.simpandata(data).subscribe(val => {
      loading.dismiss()
      loading.onDidDismiss(function(){
        toastaja.present();
      })
    })
  }
  close(){
    this.viewctrl.dismiss();
  }
}
