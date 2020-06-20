import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './team.component';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
