import { Pipe, PipeTransform } from '@angular/core';

export type NgxMultiselectArray = {
  key: string,
  value: string | number
}[];

@Pipe({
  name: 'filterNgxMultiselect'
})
export class FilterNgxMultiselectPipe implements PipeTransform {

  transform(arrayNgxMultiselect: NgxMultiselectArray, stringToFilter: string): any {
    return !!arrayNgxMultiselect ?
    arrayNgxMultiselect.filter(item => `${item.value}`.toLowerCase().trim()
      .includes(stringToFilter.toLowerCase().trim()) || item.key.toLowerCase().trim().includes(stringToFilter.toLowerCase().trim())) :
    arrayNgxMultiselect;
  }
}
