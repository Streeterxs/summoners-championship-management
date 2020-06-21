import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import TeamService from '../../services';
import { NgxMultiselectArray } from '../../../../shared/pipes/filter-ngx-multiselect/filter-ngx-multiselect.pipe';
import { RequestableTeam, Team } from '../../../../shared/models/team/team';

@Component({
  selector: 'app-scm-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  @Input() teamToEdit?: Team;
  @Input() showButtons?: boolean = true;

  teamForm: FormGroup;

  // NgxMultiselect data
  stringFilterPlayers = '';
  playerFilter = new FormControl();
  playerListFormated: NgxMultiselectArray = [];

  // Event Emitters
  @Output() formSubmitTriggered: EventEmitter<RequestableTeam> = new EventEmitter();
  @Output() formEditTriggered: EventEmitter<Team> = new EventEmitter();
  constructor(private _teamService: TeamService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._teamService.players$.subscribe(playerListReturned => {
      if (playerListReturned) {
        this.playerListFormated = playerListReturned.map(player => ({key: player.nickname, value: player.id}));
      }
    });

    this.teamForm = this.generateTeamForm(this.teamToEdit ? this.teamToEdit : undefined);
  }

  generateTeamForm(teamToEdit?: Team): FormGroup {
    return this._fb.group({
      name: [teamToEdit ? teamToEdit.name : ''],
      players: [teamToEdit ? teamToEdit.players.map(player => player.id) : []]
    });
  }

  formSubmit() {

    if (this.teamToEdit) {
      this.formEditSubmit();
      return;
    }

    const {name, players} = this.teamForm.value as {name: string, players: number[]};

    const teamRequestable: RequestableTeam = {
      name,
      players: players.map(player => this._teamService.players.find(playerReturn => playerReturn.id === player).toRequestablePlayer())
    };

    this.formSubmitTriggered.emit(teamRequestable);
  }

  formEditSubmit() {

    const {name, players} = this.teamForm.value as {name: string, players: number[]};

    this.teamToEdit.name = name;
    this.teamToEdit.players = players.map(player => this._teamService.players.find(playerReturn => playerReturn.id === player));


    this.formEditTriggered.emit(this.teamToEdit);
  }

  clearForm() {
    this.teamForm.reset();
  }

}
