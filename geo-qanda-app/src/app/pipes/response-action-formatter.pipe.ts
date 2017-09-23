import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responseActionFormatter'
})
export class ResponseActionFormatterPipe implements PipeTransform {

  transform(isQuestion: boolean): string {
    return isQuestion ? "answer" : "reply";
  }

}
