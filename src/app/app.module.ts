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
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import "hammerjs";
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
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';
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
    KelasPageModule,
    ChattingPageModule,
    AprrovalregisterPageModule,
    UseraccessPageModule,
    EmojiPickerModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogoutComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatapegawaiProvider,
    AuthenticationProvider,
    DatapegawaiProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Transfer,
    FilePath,
    AprovalregisterProvider,
    MasterkelasProvider,
    UseraccessProvider,
    EmojiProvider,
  ]
})
export class AppModule {}
