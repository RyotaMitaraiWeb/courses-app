import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: TruncatePipeArgs): unknown {
    const [maxLength] = args;
    if (value.length <= maxLength) {
      return value;
    }

    return value.slice(0, maxLength) + '...';
  }

}

type TruncatePipeArgs = [number];