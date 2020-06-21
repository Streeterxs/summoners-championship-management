import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { TournamentCreationModule } from './tournament-creation/tournament-creation.module';



@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    TournamentCreationModule
  ]
})
export class ManagerModule { }
