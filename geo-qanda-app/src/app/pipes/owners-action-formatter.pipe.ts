import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownersActionFormatter'
})
export class OwnersActionFormatterPipe implements PipeTransform {

  transform(isQuestion: any): string {
    return isQuestion ? "asked" : "answered";
  }

}
