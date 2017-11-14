import { EmojiPageModule } from './../pages/emoji/emoji.module';
import { RelativeTime } from './../app/timepipes';
import { RelativeTimePipe } from './../pipes/relative-time/relative-time';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormdatasiswaComponent } from './formdatasiswa/formdatasiswa';
import { FormeditsiswaComponent } from './formeditsiswa/formeditsiswa';
import { ViewdatasiswaComponent } from './viewdatasiswa/viewdatasiswa';
import { FormtambahkelasComponent } from './formtambahkelas/formtambahkelas';
import { FormeditkelasComponent } from './formeditkelas/formeditkelas';
import { FormtambahuseraccessComponent } from './formtambahuseraccess/formtambahuseraccess';
import { FormedituseraccessComponent } from './formedituseraccess/formedituseraccess';
import { LogoutComponent } from './logout/logout';
import { ChatmessageComponent } from './chatmessage/chatmessage';
import { EmojiPickerModule } from "@ionic-tools/emoji-picker/src";
import { EmojiProvider } from "../providers/emoji/emoji";
import { EmojiPage } from "../pages/emoji/emoji";
import { FormtambahpegawaiComponent } from './formtambahpegawai/formtambahpegawai';
import { FormeditpegawaiComponent } from './formeditpegawai/formeditpegawai';
import { ViewdatapegawaiComponent } from './viewdatapegawai/viewdatapegawai';
import { ForminputsuratketeranganComponent } from './forminputsuratketerangan/forminputsuratketerangan';
@NgModule({
	declarations: [
	FormdatasiswaComponent,
    FormeditsiswaComponent,
    ViewdatasiswaComponent,
    FormtambahkelasComponent,
    FormeditkelasComponent,
    FormtambahuseraccessComponent,
    FormedituseraccessComponent,
    FormeditkelasComponent,
    LogoutComponent,
    ChatmessageComponent,
    RelativeTime,
    FormtambahpegawaiComponent,
    FormeditpegawaiComponent,
    ViewdatapegawaiComponent,
    ForminputsuratketeranganComponent,
    ],
	imports: [
         IonicPageModule.forChild(FormdatasiswaComponent),
         EmojiPageModule
	],
	exports: [FormdatasiswaComponent,
    FormeditsiswaComponent,
    ViewdatasiswaComponent,
    FormtambahkelasComponent,
    FormeditkelasComponent,
    FormtambahuseraccessComponent,
    FormedituseraccessComponent,
    FormeditkelasComponent,
    LogoutComponent,
    ChatmessageComponent,
    FormtambahpegawaiComponent,
    FormeditpegawaiComponent,
    ViewdatapegawaiComponent,
    ForminputsuratketeranganComponent],
    providers:[
        EmojiProvider,
    ]
    
})
export class ComponentsModule {}
