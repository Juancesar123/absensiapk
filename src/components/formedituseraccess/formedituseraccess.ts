import { UseraccessProvider } from './../../providers/useraccess/useraccess';
import { ViewController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the FormedituseraccessComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'formedituseraccess',
  templateUrl: 'formedituseraccess.html',
  providers:[UseraccessProvider]
})
export class FormedituseraccessComponent {

  text: string;
  data;
  useraccess:string;
  kodesekolah:string;
  id:string;
  datauser:any;
  constructor(public viewctrl: ViewController,public params: NavParams, public useraccessService: UseraccessProvider, public loadingctrl : LoadingController, public toastctrl:ToastController) {
    console.log('Hello FormedituseraccessComponent Component');
    this.text = 'Hello World';
    this.data = params.get('deviceNum');
    this.useraccess = this.data.user_access;
    this.kodesekolah = this.data.kode_sekolah;
    this.id = this.data.id;
  }
  close(){
    this.viewctrl.dismiss();
  }
  simpan(){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    let data = {
      user_access: this.useraccess,
      kode_sekolah : this.datauser.kodesekolah
    }
    let id = this.id;
    this.useraccessService.updatedata(data,id).subscribe(val=>{
      let loading = this.loadingctrl.create({
        content:"Mohon Tungu...",
        duration:2000
      })
      let toast = this.toastctrl.create({
        message:'data sukses di ubah',
        duration :3000
      })
      loading.present()
      loading.onDidDismiss(function(){
        toast.present();
      })
    })
  }
}
