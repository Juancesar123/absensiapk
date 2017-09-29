import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojiPage } from './emoji';

@NgModule({
  declarations: [
    EmojiPage,
  ],
  imports: [
    IonicPageModule.forChild(EmojiPage),
  ],
  exports: [
    EmojiPage
]
})
export class EmojiPageModule {}
