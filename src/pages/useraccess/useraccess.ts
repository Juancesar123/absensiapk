import { FormedituseraccessComponent } from './../../components/formedituseraccess/formedituseraccess';
import { FormtambahuseraccessComponent } from './../../components/formtambahuseraccess/formtambahuseraccess';
import { UseraccessProvider } from './../../providers/useraccess/useraccess';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the UseraccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-useraccess',
  templateUrl: 'useraccess.html',
  providers:[UseraccessProvider]
})
export class UseraccessPage implements OnInit{
  listdatauseraccess: any;
  datauser;
  ngOnInit() {
  this.useraccess.getdata().subscribe((result) => this.listdatauseraccess = result)
}
  constructor(public navCtrl: NavController, public navParams: NavParams, public useraccess: UseraccessProvider, public modalctrl: ModalController, public actionctrl: ActionSheetController) {
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UseraccessPage');
  }
  tambah(){
    let modalmuncul = this.modalctrl.create(FormtambahuseraccessComponent);
    modalmuncul.present();
  }
  refresh(){
    this.useraccess.getdata().subscribe((result) => this.listdatauseraccess = result)
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
            this.useraccess.hapusdata(item).subscribe(val =>{
              this.refresh();
            })
          }
        },
        {
          text: 'Update',
          handler: () => {
            let profileModal = this.modalctrl.create(FormedituseraccessComponent,{deviceNum: item});
            profileModal.present();
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
