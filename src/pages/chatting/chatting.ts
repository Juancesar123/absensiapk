import { userModel } from './../../app/userModel';
import { AprovalregisterProvider } from './../../providers/aprovalregister/aprovalregister';
import { ChatmessageComponent } from './../../components/chatmessage/chatmessage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the ChattingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html',
  providers:[AprovalregisterProvider]
})
export class ChattingPage {
  listuser:userModel[] = [];
  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public userservice:AprovalregisterProvider) {
    this.userservice.getdata().subscribe((result) => this.listuser = result)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChattingPage');
  }
  
  viewchat(item){
    this.navCtrl.push(ChatmessageComponent,{"toUserId":item.id,"toUserName":item.nama});
  }
}
