import { Component } from '@angular/core';

/**
 * Generated class for the UploaddatasiswaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'uploaddatasiswa',
  templateUrl: 'uploaddatasiswa.html'
})
export class UploaddatasiswaComponent {

  text: string;

  constructor() {
    console.log('Hello UploaddatasiswaComponent Component');
    this.text = 'Hello World';
  }

}
