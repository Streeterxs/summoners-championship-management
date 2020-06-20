import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListModule } from './team-list/team-list.module';
import { TeamCreationModule } from './team-creation/team-creation.module';


@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamListModule,
    TeamCreationModule
  ]
})
export class TeamsModule { }
