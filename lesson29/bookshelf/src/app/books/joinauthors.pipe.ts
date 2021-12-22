import { Pipe, PipeTransform } from '@angular/core';
import { Authors } from './book/authors.type';

@Pipe({
  name: 'joinauthors'
})
export class JoinauthorsPipe implements PipeTransform {

  transform(authors: Authors, sep = ', '): string {
    return authors.map(a => { return a.name; }).join(sep);
  }

}
