import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamFormComponent } from './team-form/team-form.component';
import { TeamCreationComponent } from './team-creation.component';



@NgModule({
  declarations: [
    TeamFormComponent,
    TeamCreationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamCreationComponent
  ]
})
export class TeamCreationModule { }
