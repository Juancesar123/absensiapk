import { AprovalregisterProvider } from './../../providers/aprovalregister/aprovalregister';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public approv:AprovalregisterProvider) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprrovalregisterPage');
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
    })
  }
}
