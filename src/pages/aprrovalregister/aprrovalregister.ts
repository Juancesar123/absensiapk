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
  getdatauser;
  ngOnInit(){
    this.approv.getdata().subscribe((result)=>this.getdatauser = result)
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public approv:AprovalregisterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprrovalregisterPage');
  }
  getdata(){
    this.approv.getdata().subscribe((result)=>this.getdatauser = result)
  }
  approve(item){
    let data = {
      status:'1'
    }
    let id = item.id;
    this.approv.ubahstatus(data,id).subscribe(val => {
      this.getdata();
    })
  }
  disaprove(item){
    let data = {
      status:'2'
    }
    let id = item.id;
    this.approv.ubahstatus(data,id).subscribe(val => {
        this.getdata();
    })
  }
}
