import { DatasiswaProvider } from './../../providers/datasiswa/datasiswa';
import { DatapegawaiProvider } from './../../providers/datapegawai/datapegawai';
import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading, ViewController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the ForminputketeranganadminComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var cordova: any;
@Component({
  selector: 'forminputketeranganadmin',
  templateUrl: 'forminputketeranganadmin.html',
  providers:[DatapegawaiProvider,DatasiswaProvider]
})
export class ForminputketeranganadminComponent {
  datasiswa:any;
  text: string;
  datapegawai:any;
   lastImage: string = null;
  loading: Loading;
  inputtanggal:string;
  keterangan:string;
  nama;
  jenisuser:String;
  note:string;
  datauser;
  constructor(public viewctrl:ViewController,public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,public siswaservice:DatapegawaiProvider, public pegawaiprovider:DatasiswaProvider) {
    this.getdatasiswa();
    this.getdatapegawai();
    this.datauser = JSON.parse(localStorage.getItem('datauser'));
  }
  getdatasiswa(){
    this.siswaservice.getdata().subscribe((result)=> this.datasiswa = result)
  }
  getdatapegawai(){
    this.pegawaiprovider.getdata().subscribe((result) => this.datapegawai = result);
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
  close(){
    this.viewctrl.dismiss();
  }
  public uploadImage() {
    console.log(this.nama);
    if(this.jenisuser == 'siswa'){
      this.siswaservice.getdata().subscribe(val =>{
        val.forEach(obj =>{
            if(obj.nomorinduk == this.nama){
                var url = "http://198.50.174.117/tmpsuratketerangan";            
                // File for Upload
                var targetPath = this.pathForImage(this.lastImage);
              
                // File name only
                var filename = this.lastImage;
                var options = {
                  fileKey: 'file',
                  fileName: filename,
                  chunkedMode: false,
                  mimeType: "multipart/form-data",
                  headers: {'Authorization':localStorage.getItem('token')},
                  params : {"gambar": "http://198.50.174.117/img/"+filename,'note': this.note,"keterangan":this.keterangan,"nama":this.nama,"tanggal":this.inputtanggal,status:'approve',kodesekolah:obj.kodesekolah,"userid":obj.id,"nomorinduk":obj.nomorinduk,"useracces":this.datauser.useracces}
                };
              
                const fileTransfer: TransferObject = this.transfer.create();
              
                this.loading = this.loadingCtrl.create({
                  content: 'Uploading...',
                });
                this.loading.present();
                // Use the FileTransfer to upload the image
                fileTransfer.upload(targetPath, url, options).then(data => {
                  this.loading.dismissAll()
                  this.presentToast('Image succesful uploaded.');
                }, err => {
                  this.loading.dismissAll()
                  // console.log(ata);
                  console.log(err);
                  this.presentToast('Error while uploading file.');
                });
            }else{
              return false;
            }
        })
      })
    }else if(this.jenisuser == 'guru' || this.jenisuser =='pegawai'){
      this.pegawaiprovider.getdata().subscribe(val=>{
          val.forEach(obj =>{
            // // Destination URL
            if(obj.Nomor_Induk == this.nama){
              var url = "http://198.50.174.117/tmpsuratketerangan";        
              // File for Upload
              var targetPath = this.pathForImage(this.lastImage);
            
              // File name only
              var filename = this.lastImage;
              var options = {
                fileKey: 'file',
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                headers: {'Authorization':localStorage.getItem('token')},
                params : {"gambar": "http://198.50.174.117/img/"+filename,'note': this.note,"keterangan":this.keterangan,"nama":obj.Namama,"tanggal":this.inputtanggal,status:'approve',"kodesekolah":obj.kodesekolah,"userid":this.datauser.id,"nomorinduk":this.datauser.nomorinduk,"useracces":this.datauser.useracces}
              };
            
              const fileTransfer: TransferObject = this.transfer.create();
            
              this.loading = this.loadingCtrl.create({
                content: 'Uploading...',
              });
              this.loading.present();
              // Use the FileTransfer to upload the image
              fileTransfer.upload(targetPath, url, options).then(data => {
                this.loading.dismissAll()
                this.presentToast('Image succesful uploaded.');
              }, err => {
                this.loading.dismissAll()
                // console.log(ata);
                console.log(err);
                this.presentToast('Error while uploading file.');
              });    
            }
          })
      })
    }
  }
}
