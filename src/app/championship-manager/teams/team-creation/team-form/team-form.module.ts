import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TeamFormComponent } from './team-form.component';



@NgModule({
  declarations: [
    TeamFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    TeamFormComponent
  ]
})
export class TeamFormModule { }
