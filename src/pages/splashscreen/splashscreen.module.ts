import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashscreenPage } from './splashscreen';
import { LottieAnimationViewModule } from "ng-lottie/dist/esm/src";

@NgModule({
  declarations: [
    SplashscreenPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashscreenPage),
    LottieAnimationViewModule
  ],
})
export class SplashscreenPageModule {}
