import { EmojiProvider } from './../../providers/emoji/emoji';
import { RelativeTimePipe } from './../../pipes/relative-time/relative-time';
import { userModel, UserInfo } from './../../app/userModel';
import { Component, ViewChild, Pipe } from '@angular/core';
import { Events, Content, TextInput, IonicPage, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/**
 * Generated class for the ChatmessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'page-chat',
  templateUrl: 'chatmessage.html',
  providers:[AngularFireDatabase,EmojiProvider],
})
export class ChatmessageComponent {
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
 // msgList;
 toggled: boolean = false;
 emojitext: string;
 toUser: UserInfo;
  toUserName = this.navParams.get('toUserName');
  editorMsg = '';
  showEmojiPicker = false;
  text: string;
  msgList: FirebaseListObservable<any[]>;
  af: AngularFireDatabase ;
  user: UserInfo;
  username:String;
  datauser;
  constructor(  public events: Events,public navParams: NavParams, af: AngularFireDatabase) {
  this.text = localStorage.getItem('userid');
  this.username = localStorage.getItem('username');
  this.datauser = localStorage.getItem('userid');
  //console.log(this.datauser);
  this.msgList = af.list('/chats');
    this.toUser = {
      id: this.navParams.get('toUserId'),
      name: this.navParams.get('toUserName')
  };
  console.log(this.toUser.id);
  }
sendMsg() {
  if (!this.editorMsg.trim()) return;

  // Mock message
  const id = Date.now().toString();
  let newMsg = {
      messageId: Date.now().toString(),
      userId: this.datauser,
      userName:  this.username,
      userAvatar: 'avatar',
      toUserId: this.navParams.get('toUserId'),
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
  };

 // this.chats.push(newMsg);
  this.editorMsg = '';

  // if (!this.showEmojiPicker) {
  //     this.messageInput.setFocus();
  // }

  this.msgList.push(newMsg);
}
onFocus() {
  this.showEmojiPicker = false;
  this.content.resize();
  this.scrollToBottom();
}
switchEmojiPicker() {
  this.showEmojiPicker = !this.showEmojiPicker;
  if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
  }
  this.content.resize();
  this.scrollToBottom();
}
scrollToBottom() {
  setTimeout(() => {
      if (this.content.scrollToBottom) {
          this.content.scrollToBottom();
      }
  }, 400)
}
// getMsgIndexById(id: string) {
//   return this.msgList.findIndex(e => e.messageId === id)
// }
}
