import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, brace?: Array<string>): string {
     return brace[0] + value + brace[1];
  }

}
