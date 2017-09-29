import { LoginPage } from './../../pages/login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {
  text: string;
  constructor(public navctrl:NavController) {
    console.log('Hello LogoutComponent Component');
    localStorage.clear()
    this.navctrl.setRoot(LoginPage)
  }
}
