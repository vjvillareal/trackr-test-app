import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanProjectFlagLabel'
})
export class CleanProjectFlagLabelPipe implements PipeTransform {

  transform(label: string): string {
    return label.split("-").join(" ");
  }

}
