import { Headers } from '@angular/http';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController, ToastController, ActionSheetController, Platform } from 'ionic-angular';
/**
 * Generated class for the FormdatasiswaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

declare var cordova: any;
@Component({
  selector: 'formdatasiswa',
  templateUrl: 'formdatasiswa.html',
  providers:[DatapegawaiProvider]
})
export class FormdatasiswaComponent {
  loading;
   nama: string;
  alamat: string;
  telepon: string;
  tanggallahir: string;
  tempatlahir: string;
  agama: string;
  kelas: string;
  jenis: string;
  ayah: string;
  ibu: string;
  nomorhpibu: string;
  nomorhpayah: string;
  hp :string;
  status: string;
  kodesekolah: string;
  foto: string;
  golongandarah: string;
  emailpribadi: string;
  text:string;
  datasiswa;
  nomorinduk:string;
  data;
  lastImage: string = null;
  constructor(private toastCtrl: ToastController,public viewCtrl:ViewController,public siswaservice: DatapegawaiProvider,public loadingctrl:LoadingController,public params:NavParams,public actionSheetCtrl:ActionSheetController,public camera: Camera,private transfer: Transfer, private file: File, private filePath: FilePath,public platform: Platform) {
    console.log('Hello FormdatasiswaComponent Component');
    
   // this.text = 'Hello World';
  }
  getdata(){
    this.siswaservice.getdata().subscribe((result)=>this.datasiswa = result);
  }
close(){
    this.viewCtrl.dismiss(this.getdata());
  }
  simpan(){
    let data = {
      nama:this.nama,
      alamat:this.alamat,
      telepon:this.telepon,
      tanggallahir:this.tanggallahir,
      tempatlahir:this.tempatlahir,
      idagama:this.agama,
      idkelas:this.kelas,
      jenis:this.jenis,
      ayah:this.ayah,
      ibu:this.ibu,
      nomorhpayah:this.nomorhpayah,
      nomorhpibu:this.nomorhpibu,
      statusrec:this.status,
      kodesekolah:this.kodesekolah,
      foto:'23',
      golongandarah:this.golongandarah,
      emailpribadi:this.emailpribadi,
      nomorinduk:this.nomorinduk,
      hp:this.hp
    }
    this.siswaservice.simpandata(data).subscribe(val =>{
      let loader = this.loadingctrl.create({
        content: "Please wait...",
        duration: 1000,
        
      });
      let toast = this.toastCtrl.create({
        message: 'data sukses di simpan',
        duration: 3000,
        position: 'bottom'
      });
      loader.present();
      loader.onDidDismiss(() => {
        toast.present()
      });
    })
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  uploadImage() {
    // Destination URL
    let data = {
      nama:this.nama,
      alamat:this.alamat,
      telepon:this.telepon,
      tanggallahir:this.tanggallahir,
      tempatlahir:this.tempatlahir,
      idagama:this.agama,
      idkelas:this.kelas,
      jenis:this.jenis,
      ayah:this.ayah,
      ibu:this.ibu,
      nomorhpayah:this.nomorhpayah,
      nomorhpibu:this.nomorhpibu,
      statusrec:this.status,
      kodesekolah:this.kodesekolah,
      foto:filename,
      golongandarah:this.golongandarah,
      emailpribadi:this.emailpribadi,
      nomorinduk:this.nomorinduk,
      hp:this.hp,
     // foto:filename
    }
    var url = "http://localhost:3030/datasiswa";
   let body = JSON.stringify(data)
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
   
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      headers: {'content-Type':'application/json','Authorization':localStorage.getItem('token')},
      params : data
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingctrl.create({
      content: 'Uploading...',
      duration: 3000,
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
}
