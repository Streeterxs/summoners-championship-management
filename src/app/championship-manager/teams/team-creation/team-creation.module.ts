import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamCreationComponent } from './team-creation.component';
import { TeamFormModule } from './team-form/team-form.module';



@NgModule({
  declarations: [
    TeamCreationComponent
  ],
  imports: [
    CommonModule,
    TeamFormModule
  ],
  exports: [
    TeamCreationComponent
  ]
})
export class TeamCreationModule { }
