import { MasterkelasProvider } from './../../providers/masterkelas/masterkelas';
import { FormtambahkelasComponent } from './../../components/formtambahkelas/formtambahkelas';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, Events } from 'ionic-angular';
import { FormeditkelasComponent } from "../../components/formeditkelas/formeditkelas";
import { FormControl } from '@angular/forms';

/**
 * Generated class for the KelasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kelas',
  templateUrl: 'kelas.html',
  providers:[MasterkelasProvider]
})

export class KelasPage implements OnInit{
  datauser;
  datakelas;
  constructor(public events:Events,public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController,public kelasservice : MasterkelasProvider, public actionctrl:ActionSheetController){
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
    this.events.subscribe('simpandatakelas',()=>{
      this.refresh();
    })
    this.events.subscribe('ubahdatakelas',()=>{
      this.refresh();
    })
  }

  ngOnInit(){
    this.kelasservice.getdata().subscribe((result)=> this.datakelas = result);
  }
  
  tambah(){
    let profileModal = this.modalCtrl.create(FormtambahkelasComponent);
    profileModal.present();
}
  refresh(){
    this.kelasservice.getdata().subscribe((result)=> this.datakelas = result);
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
            this.kelasservice.hapusdata(item).subscribe(val =>{
              this.refresh();
            })
          }
        },
        {
          text: 'Update',
          handler: () => {
            let profileModal = this.modalCtrl.create(FormeditkelasComponent,{deviceNum: item});
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

