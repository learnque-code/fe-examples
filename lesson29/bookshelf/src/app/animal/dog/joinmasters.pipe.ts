import { Pipe, PipeTransform } from '@angular/core';
import {DogMaster} from "./dog-master.model";

@Pipe({
  name: 'joinmasters'
})
export class JoinmastersPipe implements PipeTransform {

  transform(masters: DogMaster[], sep: string = ', '): string {
    return masters.map(m => m.firstName).join(sep);
  }

}
