import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { TeamListComponent } from './team-list.component';



@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    TeamListComponent
  ]
})
export class TeamListModule { }
