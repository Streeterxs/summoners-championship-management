import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTournamentTreeModule } from 'ng-tournament-tree';

import { ChampionshipComponent } from './championship.component';
import { MatchModule } from './match/match.module';



@NgModule({
  declarations: [ChampionshipComponent],
  imports: [
    CommonModule,
    NgTournamentTreeModule,
    MatchModule
  ],
  exports: [
    ChampionshipComponent
  ]
})
export class ChampionshipModule { }
