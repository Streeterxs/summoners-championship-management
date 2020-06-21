import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { NgxMultiselectArray } from '../../../../shared/pipes/filter-ngx-multiselect/filter-ngx-multiselect.pipe';
import TeamService from '../../../teams/services';

@Component({
  selector: 'app-scm-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {
  tournamentForm: FormGroup;

  // NgxMultiselect data
  stringFilterTeams = '';
  teamFilter = new FormControl();
  teamListFormated: NgxMultiselectArray = [];

  constructor(private _fb: FormBuilder, private _teamService: TeamService) { }

  ngOnInit(): void {
    this._teamService.teams$.subscribe(teams => {
      if (teams) {
        this.teamListFormated = teams.map(team => ({key: team.name, value: team.id}));
      }
    });

    this.tournamentForm = this.generateTournamentForm();
  }

  generateTournamentForm() {
    return this._fb.group({
      name: [''],
      teams: [[]],
      teamNumber: []
    });
  }

  formSubmit() {
    console.log(this.tournamentForm.value);
  }

  clearForm() {
    this.tournamentForm.reset();
  }

}
