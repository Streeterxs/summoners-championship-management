import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { TeamListComponent } from './team-list.component';
import { TeamModule } from './team/team.module';



@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    TeamModule
  ],
  exports: [
    TeamListComponent
  ]
})
export class TeamListModule { }
