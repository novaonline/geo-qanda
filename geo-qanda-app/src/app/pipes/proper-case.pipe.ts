import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properCase'
})
export class ProperCasePipe implements PipeTransform {

  transform(input: string): string {
    if (!input) return '';
    return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
  }

}
