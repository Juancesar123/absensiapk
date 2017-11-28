import { SplashscreenPage } from './../pages/splashscreen/splashscreen';
import { SuratketeranganPage } from './../pages/suratketerangan/suratketerangan';
import { ImportdatapegawaiPage } from './../pages/importdatapegawai/importdatapegawai';
import { ImportdatasiswaPage } from './../pages/importdatasiswa/importdatasiswa';
import { DataentryattdPage } from './../pages/dataentryattd/dataentryattd';
import { DatapegawaiPage } from './../pages/datapegawai/datapegawai';
import { userModel } from './userModel';
import { HomePage } from './../pages/home/home';
import { AuthenticationProvider } from './../providers/authentication/authentication';
import { LaporanabsensiPage } from './../pages/laporanabsensi/laporanabsensi';
import { AbsensisiswaPage } from './../pages/absensisiswa/absensisiswa';
import { LogoutComponent } from './../components/logout/logout';
import { UseraccessPage } from './../pages/useraccess/useraccess';
import { KelasPage } from './../pages/kelas/kelas';
import { ChattingPage } from './../pages/chatting/chatting';
import { AprrovalregisterPage } from './../pages/aprrovalregister/aprrovalregister';
import { ProfilPage } from './../pages/profil/profil';
import { DatasiswaPage } from './../pages/datasiswa/datasiswa';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, NavController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingjamPage } from '../pages/settingjam/settingjam';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any,icon:any}>;
  datauser:any;
  userdataok:any;
  constructor(public modalCtrl : ModalController,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public auth : AuthenticationProvider){
    this.initializeApp();
   
}
ngOnInit(){
  this.datauser = JSON.parse(localStorage.getItem('datauser'))        
  if(this.datauser.useracces == 'admin'){
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
    { title: 'Surat Keterangan', component: SuratketeranganPage,icon: 'ios-book-outline' },      
    //{ title: 'Show Anim', component: SplashScreen,icon: 'ios-book-outline' },
    { title: 'Data Siswa', component: DatasiswaPage,icon: 'logo-buffer' },
    { title: 'Data Pegawai', component: DatapegawaiPage,icon: 'logo-buffer' },
    { title: 'Approval Register', component: AprrovalregisterPage,icon: 'logo-buffer'},   
    { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
    { title: 'Import Data Pegawai', component: ImportdatapegawaiPage,icon: 'logo-buffer'},
    { title: 'Import Data Siswa', component: ImportdatasiswaPage,icon: 'logo-buffer'},
    // { title: 'Data Entry Attd', component:DataentryattdPage,icon: 'logo-buffer'},
    { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
    { title: 'Kelas', component: KelasPage,icon: 'logo-buffer'},
    { title: 'User Access', component: UseraccessPage,icon: 'ios-key-outline' },
    { title: 'Setting Jam Absen', component: SettingjamPage,icon: 'ios-settings-outline' },
    { title: 'Laporan Absensi', component: LaporanabsensiPage,icon: 'ios-book-outline' },        
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}else if(this.datauser.useracces == 'siswa'){
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
     { title: 'Surat Keterangan', component: SuratketeranganPage,icon: 'ios-book-outline' },
    { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
    //{ title: 'Show Anim', component: SplashscreenPage,icon: 'ios-book-outline' },
    { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
    { title: 'Absensi Finger', component: AbsensisiswaPage,icon: 'ios-checkmark' },         
    { title: 'Laporan Absensi', component: LaporanabsensiPage,icon: 'ios-book-outline' },      
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}else if(this.datauser.useracces == 'pegawai'){
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
    { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
    { title: 'Surat Keterangan', component: SuratketeranganPage,icon: 'ios-book-outline' },
    { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
    { title: 'Absensi Finger', component: AbsensisiswaPage,icon: 'ios-checkmark' },         
    { title: 'Laporan Absensi', component: LaporanabsensiPage,icon: 'ios-book-outline' },      
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}else if(this.datauser.useracces == 'guru'){
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
    { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
    { title: 'Surat Keterangan', component: SuratketeranganPage,icon: 'ios-book-outline' },
    { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
    { title: 'Absensi Finger', component: AbsensisiswaPage,icon: 'ios-checkmark' },         
    { title: 'Laporan Absensi', component: LaporanabsensiPage,icon: 'ios-book-outline' },      
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}else if(this.datauser.useracces == 'owner'){
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
    { title: 'Approval Register', component: AprrovalregisterPage,icon: 'logo-buffer'},
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}else{
  this.pages = [
    { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
    { title: 'Data Siswa', component: DatasiswaPage,icon: 'logo-buffer' },
    { title: 'Data Pegawai', component: DatapegawaiPage,icon: 'logo-buffer' },
    { title: 'Surat Keterangan', component: SuratketeranganPage,icon: 'ios-book-outline' },
    { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
    { title: 'Approval Register', component: AprrovalregisterPage,icon: 'logo-buffer'},
    { title: 'Import Data Pegawai', component: ImportdatapegawaiPage,icon: 'logo-buffer'},
    { title: 'Import Data Siswa', component: ImportdatasiswaPage,icon: 'logo-buffer'},
    { title: 'Data Entry Attd', component:DataentryattdPage,icon: 'logo-buffer'},
    { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
    { title: 'Kelas', component: KelasPage,icon: 'logo-buffer'},
    { title: 'User Access', component: UseraccessPage,icon: 'ios-key-outline' },
    { title: 'Setting Jam Absen', component: SettingjamPage,icon: 'ios-settings-outline' },
    { title: 'Laporan Absensi', component: LaporanabsensiPage,icon: 'ios-book-outline' },      
    { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
  ];
}
}
ionViewDidLoad() {
 
}
  initializeApp() {
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.userdataok = JSON.parse(localStorage.getItem('datauser'));
      if (this.userdataok == null) {
       this.nav.setRoot(LoginPage)
        // this.user is authenticated!
      }else{
        
        this.nav.setRoot(HomePage);
      }
      this.statusBar.styleDefault();
      // let splash = this.modalCtrl.create(SplashscreenPage);
      // splash.present();
     
       // used for an example of ngFor and navigation
       this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
