import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TeamFilterComponent } from './team-filter.component';



@NgModule({
  declarations: [
    TeamFilterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TeamFilterComponent
  ]
})
export class TeamFilterModule { }
