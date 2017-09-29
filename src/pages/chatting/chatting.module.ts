import { RelativeTime } from './../../app/timepipes';
import { EmojiPageModule } from './../emoji/emoji.module';
import { ChatmessageComponent } from './../../components/chatmessage/chatmessage';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattingPage } from './chatting';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';
import { AngularFireModule } from 'angularfire2';
import { EmojiProvider } from "../../providers/emoji/emoji";
import { EmojiPage } from "../emoji/emoji";

export const firebaseConfig = {
  apiKey: "AIzaSyB1zSZkg6NAjkU7L-ZmolXJhwrnelTxYhc",
  authDomain: "rajadev-d40f6.firebaseapp.com",
  databaseURL: "https://rajadev-d40f6.firebaseio.com",
  projectId: "rajadev-d40f6",
  storageBucket: "rajadev-d40f6.appspot.com",
  messagingSenderId: "86818748220"
};
@NgModule({
  declarations: [
    ChattingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattingPage),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  entryComponents: [ChatmessageComponent]
 
})
export class ChattingPageModule {}
