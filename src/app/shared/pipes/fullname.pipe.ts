import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/users/models';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return value.nombre + ' ' + value.apellido;
  }

}
