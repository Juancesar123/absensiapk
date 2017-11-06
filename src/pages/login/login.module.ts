import { ContactusPageModule } from './../contactus/contactus.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ContactusPageModule
  ],
})
export class LoginPageModule {}
