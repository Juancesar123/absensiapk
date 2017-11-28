import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LottieAnimationViewModule } from 'ng-lottie';
/**
 * Generated class for the SplashscreenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html',
})
export class SplashscreenPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lottieConfig = {
      path: 'assets/in_progress_-_loader.json',
      autoplay: true,
      loop: true
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashscreenPage');
  }
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

}
