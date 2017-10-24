import { settingjamModel } from './../../app/settingjammodel';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
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
export class SettingjamPage implements OnInit{
  starttime:String;
  endtime:String;
  day:String;
  datauser;
  settime:String;
  dataattd;
  constructor(public actionctrl: ActionSheetController,public toastcontroller: ToastController,public navCtrl: NavController, public navParams: NavParams,public settingjamservices : SettingjamProvider) {
    
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }
  ngOnInit(){
    this.settingjamservices.getdata().subscribe((result)=>this.dataattd = result) 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingjamPage');
  }
  save(){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    console.log(this.datauser)
    let data = {starttime:this.starttime,endtime:this.endtime,day:this.day,settime:this.settime,user_acces:this.datauser.useracces,kodesekolah:this.datauser.kodesekolah}
    let toast = this.toastcontroller.create({
      message:'data sukses di input',
      position:'top',
      duration:2000
    })
    this.settingjamservices.getdata().subscribe(result => {
       this.settingjamservices.simpandata(data).subscribe(val =>{
          toast.present();
          this.refresh();
      })
    })
  }
  refresh(){
    this.settingjamservices.getdata().subscribe((result)=>this.dataattd = result)
  }
  presentActionSheet(item) {
    let actionSheet = this.actionctrl.create({
      title: 'Action',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.settingjamservices.hapusdata(item).subscribe(val =>{
              this.refresh();
            })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
