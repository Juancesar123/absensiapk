import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading, ViewController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the FormubahprofilComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var cordova: any;
/**
 * Generated class for the ImportdatasiswaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-importdatasiswa',
  templateUrl: 'importdatasiswa.html',
})
export class ImportdatasiswaPage {
  loading: Loading;
  datauser;
  text: string;
  huruf;
  lastImage: string = null;
  constructor(public viewctrl:ViewController,public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
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
  public takePicture(sourceType) {
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
  private createFileName() {
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
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  public uploadImage() {
    // Destination URL
    var url = "http://198.50.174.117/users";
    let databaru = this.datauser.nomorinduk;
    var targetPath = this.pathForImage(this.lastImage);
    
     // File name only
     
     var filename = this.lastImage;
     let data = {
       nomorinduk:this.datauser.nomorinduk,
       uid:'0',
       email:this.datauser.email,
       nomorhp:this.datauser.nomorhp,
       nama:this.datauser.nama,
       useracces:this.datauser.useracces,
       title:'Administrator',
       namasekolah:this.datauser.namasekolah,
       kodesekolah:this.datauser.kodesekolah,
       password:this.huruf.huruf,
       "gambar": "http://198.50.174.117/imgprofile/"+filename,
       //deviceid:deviceid,
       status:'1',
     
       }
     console.log(filename);
     var options = {
       fileKey: 'file',
       fileName: filename,
       chunkedMode: false,
       mimeType: "multipart/form-data",
       headers: {'Authorization':localStorage.getItem('token')},
        params : data
     };
    
     const fileTransfer: TransferObject = this.transfer.create();
    
     this.loading = this.loadingCtrl.create({
       content: 'Uploading...',
     });
     this.loading.present();
    console.log(targetPath);
     // Use the FileTransfer to upload the image
     fileTransfer.upload(targetPath, url, options).then(data => {
       this.loading.dismissAll()
       console.log(data);
       this.presentToast('Image succesful uploaded.');
     }, err => {
       this.loading.dismissAll()
       // console.log(ata);
       console.log(err);
       this.presentToast('Error while uploading file.');
     });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportdatasiswaPage');
  }

}
