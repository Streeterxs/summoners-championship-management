import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChampionshipComponent } from './championship.component';
import { MatchModule } from './match/match.module';
import { NgTournamentTreeModule } from '../../../shared/components/championship-tree/ng-tournament-tree.module';



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
