import { Component, OnInit } from '@angular/core';

import { TournamentFormValue } from './tournament-form/tournament-form.component';
import TeamService from '../../teams/services';
import championshipModule from '../service/championshipModule';
import { ManagerStoreService } from '../../../core/store';
import { Championship } from '../../../shared/models/championship/championship';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scm-tournament-creation',
  templateUrl: './tournament-creation.component.html',
  styleUrls: ['./tournament-creation.component.scss']
})
export class TournamentCreationComponent implements OnInit {

  constructor(
    private _teamService: TeamService,
    private _managerService: ManagerStoreService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  championshipCreation(tournamentForm: TournamentFormValue) {

    console.log('championshipCreation!!!');
    const {name, teams} = tournamentForm;

    const generateRounds = championshipModule(teams.map(teamId => this._teamService.teams.find(team => team.id === teamId)))
    const phases = generateRounds();

    this._managerService.championship = new Championship(name, phases);
    this._router.navigate(['../brackets'], {relativeTo: this._activatedRoute});
  }

}
