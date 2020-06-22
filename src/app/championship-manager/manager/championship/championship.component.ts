import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { ManagerStoreService } from '../../../core/store';
import { Championship, Phases } from 'src/app/shared/models/championship/championship';

import { NgttTournament, NgttRound } from 'ng-tournament-tree';
import { SingleEliminationTreeComponent } from 'ng-tournament-tree/lib/single-elimination-tree/single-elimination-tree.component';

import { TeamClickEvent } from './match/match.component';

@Component({
  selector: 'app-scm-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {

  championship: Championship;

  @ViewChild('tournamentTree') tournamentTree: SingleEliminationTreeComponent;

  public singleEliminationTournament: NgttTournament;

  constructor(
    private _managerService: ManagerStoreService,
    private _cdRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.championship = this._managerService.championship;

    this.singleEliminationTournament = {
      rounds: [...this.generateRounds(this.championship.phases)]
    };
  }

  pickWinner(teamClickEvent: TeamClickEvent) {

    const {team, match} = teamClickEvent;



    if (match.nextRound) {

      const roundToUpdate = this.championship.findRoundById(match.nextRound);

      if (match.winner) {

        if (match.winner.id === team.id && !(roundToUpdate.winner)) {

          const teamFoundedString = roundToUpdate.idToTeam1OrTeam2OrWinner(match.winner.id);
          match.winner = undefined;
          roundToUpdate[teamFoundedString] = undefined;

          this.singleEliminationTournament = {
            rounds: [...this.generateRounds(this.championship.phases)]
          };
        }

        return;
      }

      if (!roundToUpdate.team1) {

        roundToUpdate.team1 = team;
      } else if (!roundToUpdate.team2) {

        roundToUpdate.team2 = team;
      }
    }

    if (match.winner) {

      if (match.winner.id === team.id) {

        match.winner = undefined;

        this.singleEliminationTournament = {
          rounds: [...this.generateRounds(this.championship.phases)]
        };
      }

      return;
    }

    match.winner = team;

    const roundsGenerated = [...this.generateRounds(this.championship.phases)];

    this.singleEliminationTournament = {
      rounds: roundsGenerated
    };

  }

  generateRounds(phases: Phases): NgttRound[] {
    const phasesToReturn: NgttRound[] = phases.map((phase, index) => {
      return {
        type: index === phases.length - 1 ? 'Final' : 'Winnerbracket',
        matches: phase
      };
    });

    return phasesToReturn;
  }

}
