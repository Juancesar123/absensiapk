import { AprovalregisterProvider } from './../../providers/aprovalregister/aprovalregister';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Push, PushOptions, PushObject } from '@ionic-native/push';

/**
 * Generated class for the AprrovalregisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aprrovalregister',
  templateUrl: 'aprrovalregister.html',
  providers:[AprovalregisterProvider]
})
export class AprrovalregisterPage implements OnInit{
  getdatauser:any = [];
  datauser;
  dataku;
  datapush:any = [];
  ngOnInit(){
   this.getdata();
  }
  constructor(private push: Push,public navCtrl: NavController, public navParams: NavParams, public approv:AprovalregisterProvider) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    // to check if we have permission
    // this.push.hasPermission()
    //   .then((res: any) => {
    
    //     if (res.isEnabled) {
    //       console.log('We have permission to send push notifications');
    //     } else {
    //       console.log('We do not have permission to send push notifications');
    //     }
    
    //   });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprrovalregisterPage');
  }
  pushnotif(){
    const options: PushOptions = {
      android: {
        icon:'ios-checkmark',
        sound: 'true',
        vibrate:true,
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
   
   const pushObject: PushObject = this.push.init(options);
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  getdata(){
    this.approv.getdata()
    
    .subscribe(result=>{
      result.forEach(val=> {
        if(val.useracces == 'admin' && this.datauser.useracces == 'owner'){
           this.getdatauser.push(val);
        }else if(val.useracces != 'admin' && val.useracces !='owner' && this.datauser.useracces =='admin' && val.kodesekolah == this.datauser.kodesekolah){
          this.getdatauser.push(val);
        }
     })
    })
  }

  approve(item){
    let dataku = {
      id:item.id,
      nama:item.nama,
      nomorinduk:item.nomorinduk,
      status:'1'
    }
    let data = {
      status:'1'
    }
    let id = item.nomorinduk;
    this.approv.ubahstatus(data,id).subscribe(val => {
      let updateItem = this.getdatauser.find(x => x.id == dataku.id);
      
      let index = this.getdatauser.indexOf(updateItem);

       //console.log(JSON.stringify(updateItem));
      // // console.log(JSON.stringify(this.itemArray));
      
      this.getdatauser[index] = dataku;
      this.pushnotif();
    })
  }

  findIndexToUpdate(dataku) { 
      return dataku.id === this;
  }
  disaprove(item){
    let dataku = {
      id:item.id,
      nama:item.nama,
      nomorinduk:item.nomorinduk,
      status:'2'
    }
    let data = {
      status:'2'
    }
    let id = item.nomorinduk;
    this.approv.ubahstatus(data,id).subscribe(val => {
       let updateItem = this.getdatauser.find(x => x.id == dataku.id);
      let index = this.getdatauser.indexOf(updateItem);
       //console.log(JSON.stringify(updateItem));
      // // console.log(JSON.stringify(this.itemArray));
      this.getdatauser[index] = dataku;
      this.pushnotif();
    })
  }
}
