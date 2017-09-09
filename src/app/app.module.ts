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
import { File } from '@ionic-native/file';
import { ProfilPageModule } from "../pages/profil/profil.module";
import { AprovalregisterProvider } from '../providers/aprovalregister/aprovalregister';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    RegisterPageModule,
    DatasiswaPageModule,
    ProfilPageModule,
    ChattingPageModule,
    AprrovalregisterPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
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
    AprovalregisterProvider,
  ]
})
export class AppModule {}
