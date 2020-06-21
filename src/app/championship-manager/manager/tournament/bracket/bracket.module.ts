import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketComponent } from './bracket.component';

import { NgTournamentTreeModule } from 'ng-tournament-tree';



@NgModule({
  declarations: [BracketComponent],
  imports: [
    CommonModule,
    NgTournamentTreeModule
  ]
})
export class BracketModule { }
