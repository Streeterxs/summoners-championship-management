import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { TeamFormComponent } from './team-form.component';
import { FilterNgxMultiselectModule } from '../../../../shared/pipes/filter-ngx-multiselect/filter-ngx-multiselect.module';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    TeamFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTooltipModule,
    MatSelectModule,
    FilterNgxMultiselectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule
  ],
  exports: [
    TeamFormComponent
  ]
})
export class TeamFormModule { }
