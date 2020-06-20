import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNgxMultiselectPipe } from './filter-ngx-multiselect.pipe';



@NgModule({
  declarations: [FilterNgxMultiselectPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FilterNgxMultiselectPipe
  ]
})
export class FilterNgxMultiselectModule { }
