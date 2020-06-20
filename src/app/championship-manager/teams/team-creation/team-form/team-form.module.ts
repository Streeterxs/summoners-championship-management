import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamFormComponent } from './team-form.component';



@NgModule({
  declarations: [
    TeamFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamFormComponent
  ]
})
export class TeamFormModule { }
