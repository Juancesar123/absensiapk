import { Pipe} from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toString().toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}
