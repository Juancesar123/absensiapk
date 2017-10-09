import { settingjamModel } from './../../app/settingjammodel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SettingjamProvider } from '../../providers/settingjam/settingjam';

/**
 * Generated class for the SettingjamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settingjam',
  templateUrl: 'settingjam.html',
  providers:[SettingjamProvider]
})
export class SettingjamPage {
  starttime:String;
  endtime:String;
  constructor(public toastcontroller: ToastController,public navCtrl: NavController, public navParams: NavParams,public settingjamservices : SettingjamProvider) {
    this.settingjamservices.getdata().subscribe(val =>{
      if(val[0] == undefined){
      }else{
        this.starttime = val[0].starttime;
        this.endtime = val[0].endtime;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingjamPage');
  }
  save(){
    let data = {starttime:this.starttime,endtime:this.endtime}
    let toast = this.toastcontroller.create({
      message:'data sukses di input',
      position:'top',
      duration:2000
    })
    this.settingjamservices.getdata().subscribe(result => {
      console.log(result[0]);
      if(result[0] == undefined){
          this.settingjamservices.simpandata(data).subscribe(val =>{
            toast.present();
        })
      }else{
          var id = result[0].id
          this.settingjamservices.updatedata(data,id).subscribe(val =>{
          toast.present();
        })
      }
    })
    
  }
}
