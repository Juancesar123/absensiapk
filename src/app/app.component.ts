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
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SettingjamPage } from '../pages/settingjam/settingjam';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any,icon:any}>;
  datauser:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      this.datauser = JSON.parse(localStorage.getItem('datauser'));
      console.log(this.datauser)
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon: 'ios-home-outline' },
      { title: 'Data Siswa', component: DatasiswaPage,icon: 'logo-buffer' },
      { title: 'Profil', component: ProfilPage,icon: 'ios-contact-outline'},
      { title: 'Approval Register', component: AprrovalregisterPage,icon: 'logo-buffer'},
      { title: 'Chatting', component: ChattingPage,icon: 'ios-chatbubbles-outline'},
      { title: 'Kelas', component: KelasPage,icon: 'logo-buffer'},
      { title: 'User Access', component: UseraccessPage,icon: 'ios-key-outline' },
      { title: 'Setting Jam Absen', component: SettingjamPage,icon: 'ios-settings-outline' },
      { title: 'Absensi siswa', component: AbsensisiswaPage,icon: 'ios-checkmark' },
      {title: 'Laporan Absensi Siswa', component: LaporanabsensiPage,icon: 'ios-book-outline' },      
      { title: 'LogOut', component: LogoutComponent ,icon: 'ios-power-outline'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
