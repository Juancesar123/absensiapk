import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DatasiswasearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'datasiswasearch',
})
export class DatasiswasearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, input: string) {
    if (input) {
      return value.filter(function (el: any) {
       return el.nama.toString().indexOf(input) > -1 ;
      })
     }
     return value;
}
}
