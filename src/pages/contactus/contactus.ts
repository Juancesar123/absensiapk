import { ContactusProvider } from './../../providers/contactus/contactus';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
  providers:[ContactusProvider]
})
export class ContactusPage implements OnInit {
  dataperson;
  constructor(public contactusService:ContactusProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
      this.contactusService.getdata().subscribe((result) => this.dataperson = result);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
