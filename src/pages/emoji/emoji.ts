import { Component, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { EmojiProvider } from "../../providers/emoji/emoji";

/**
 * Generated class for the EmojiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
export const EMOJI_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojiPage),
  multi: true
};
@Component({
  selector: 'page-emoji',
  templateUrl: 'emoji.html',
  providers: [EMOJI_PICKER_VALUE_ACCESSOR],
})

export class EmojiPage implements ControlValueAccessor {
  emojiArr = [];
  
      _content: string;
      _onChanged: Function;
      _onTouched: Function;
  constructor(public navCtrl: NavController, public navParams: NavParams,emojiProvider: EmojiProvider) {
    this.emojiArr = emojiProvider.getEmojis();
    console.log('hai');
  }
  writeValue(obj: any): void {
    this._content = obj;
}

registerOnChange(fn: any): void {
    this._onChanged = fn;
    this.setValue(this._content);
}

registerOnTouched(fn: any): void {
    this._onTouched = fn;
}

private setValue(val: any): any {
    this._content += val;
    if (this._content) {
        this._onChanged(this._content)
    }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojiPage');
  }

}
