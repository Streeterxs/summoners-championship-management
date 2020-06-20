import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import TeamService from '../../services';
import { NgxMultiselectArray } from '../../../../shared/pipes/filter-ngx-multiselect/filter-ngx-multiselect.pipe';

@Component({
  selector: 'app-scm-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamForm: FormGroup;

  // NgxMultiselect data
  stringFilterPlayers = '';
  playerFilter = new FormControl();
  playerListFormated: NgxMultiselectArray = [];

  constructor(private _teamService: TeamService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._teamService.players$.subscribe(playerListReturned => {
      if (playerListReturned) {
        this.playerListFormated = playerListReturned.map(player => ({key: player.nickname, value: player.id}));
      }
    });

    this.teamForm = this.generateTeamForm();
  }

  generateTeamForm(): FormGroup {
    return this._fb.group({
      name: [''],
      players: [[]]
    });
  }

  formSubmit() {
    console.log('form values: ', this.teamForm.value);
  }

}
