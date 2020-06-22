import { Component, OnInit } from '@angular/core';

import { TournamentFormValue } from './tournament-form/tournament-form.component';
import TeamService from '../../teams/services';
import championshipModule from '../service/championshipModule';

@Component({
  selector: 'app-scm-tournament-creation',
  templateUrl: './tournament-creation.component.html',
  styleUrls: ['./tournament-creation.component.scss']
})
export class TournamentCreationComponent implements OnInit {

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
  }

  championshipCreation(tournamentForm: TournamentFormValue) {

    console.log('championshipCreation!!!');
    const {name, teams} = tournamentForm;

    const generateRounds = championshipModule(teams.map(teamId => this._teamService.teams.find(team => team.id === teamId)))
    generateRounds();
  }

}
