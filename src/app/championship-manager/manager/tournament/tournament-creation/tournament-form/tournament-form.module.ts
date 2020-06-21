import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { FilterNgxMultiselectModule } from '../../../../../shared/pipes/filter-ngx-multiselect/filter-ngx-multiselect.module';
import { TournamentFormComponent } from './tournament-form.component';



@NgModule({
  declarations: [TournamentFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    FilterNgxMultiselectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule
  ]
})
export class TournamentFormModule { }
