import { SplashscreenPageModule } from './../pages/splashscreen/splashscreen.module';
import { SuratketeranganPageModule } from './../pages/suratketerangan/suratketerangan.module';
import { DataentryattdPageModule } from './../pages/dataentryattd/dataentryattd.module';
import { ImportdatasiswaPageModule } from './../pages/importdatasiswa/importdatasiswa.module';
import { ImportdatapegawaiPageModule } from './../pages/importdatapegawai/importdatapegawai.module';
import { DatapegawaiPageModule } from './../pages/datapegawai/datapegawai.module';
import { LaporanabsensiPageModule } from './../pages/laporanabsensi/laporanabsensi.module';
import { AbsensisiswaPageModule } from './../pages/absensisiswa/absensisiswa.module';
import { PipesModule } from './../pipes/pipes.module';
import { LogoutComponent } from './../components/logout/logout';
import { UseraccessPageModule } from './../pages/useraccess/useraccess.module';
import { KelasPageModule } from './../pages/kelas/kelas.module';
import { FilterPipe } from './../components/filteringdata/filteringdata';
import { AprrovalregisterPageModule } from './../pages/aprrovalregister/aprrovalregister.module';
import { ChattingPageModule } from './../pages/chatting/chatting.module';
import { DatasiswaPageModule } from './../pages/datasiswa/datasiswa.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { LoginPageModule } from './../pages/login/login.module';
import {HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {Push} from'@ionic-native/push';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import "hammerjs";
import { LottieAnimationViewModule } from 'ng-lottie';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatapegawaiProvider } from '../providers/datapegawai/datapegawai';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { ProfilPageModule } from "../pages/profil/profil.module";
import { AprovalregisterProvider } from '../providers/aprovalregister/aprovalregister';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { MasterkelasProvider } from '../providers/masterkelas/masterkelas';
import { UseraccessProvider } from '../providers/useraccess/useraccess';
import { EmojiProvider } from '../providers/emoji/emoji';
import { RelativeTimePipe } from "../pipes/relative-time/relative-time";
import { RelativeTime } from "./timepipes";
import { Network } from '@ionic-native/network';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';
import { SettingjamPageModule } from '../pages/settingjam/settingjam.module';
import { SettingjamProvider } from '../providers/settingjam/settingjam';
import { DatasiswaProvider } from '../providers/datasiswa/datasiswa';
import { ContactusProvider } from '../providers/contactus/contactus';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { SuratketeranganProvider } from '../providers/suratketerangan/suratketerangan';
import { LaporanabsensiProvider } from '../providers/laporanabsensi/laporanabsensi';
//import {Push} from '@ionic-native/Push';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    RegisterPageModule,
    DatasiswaPageModule,
    ProfilPageModule,
    DatapegawaiPageModule,
    ImportdatapegawaiPageModule,
    ImportdatasiswaPageModule,
    DataentryattdPageModule,
    KelasPageModule,
    LaporanabsensiPageModule,
    ChattingPageModule,
    SplashscreenPageModule,
    AprrovalregisterPageModule,
    UseraccessPageModule,
    SuratketeranganPageModule,
    AbsensisiswaPageModule,
    SettingjamPageModule,
    EmojiPickerModule.forRoot(),
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogoutComponent
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatapegawaiProvider,
    AuthenticationProvider,
    DatapegawaiProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Push,
    UniqueDeviceID,
    Camera,
    Transfer,
    FilePath,
    AprovalregisterProvider,
    MasterkelasProvider,
    UseraccessProvider,
    EmojiProvider,
    SettingjamProvider,
    DatasiswaProvider,
    ContactusProvider,
    SuratketeranganProvider,
    LaporanabsensiProvider
  ]
})
export class AppModule {}
