import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello LogoutComponent Component');
    this.text = 'Hello World';
  }

}
