import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellphone'
})
export class CellphonePipe implements PipeTransform {

  transform(val: string, args) {
    // let formatted = '+5519992926495';
    return '(' + val.slice(3, 5) + ') ' + val.slice(5, 10) + '-' + val.slice(10);

  }

}
