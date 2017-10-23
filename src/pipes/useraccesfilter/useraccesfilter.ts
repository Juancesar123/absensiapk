import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UseraccesfilterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'useraccesfilter',
})
export class UseraccesfilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, input: string) {
    if (input) {
      return value.filter(function (el: any) {
       return el.user_access.toString().indexOf(input) > -1 ;
      })
     }
     return value;
}
}
