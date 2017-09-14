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
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Data Siswa', component: DatasiswaPage },
      { title: 'Profil', component: ProfilPage },
      { title: 'Approval Register', component: AprrovalregisterPage },
      { title: 'Chatting', component: ChattingPage },
      { title: 'Kelas', component: KelasPage },
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
