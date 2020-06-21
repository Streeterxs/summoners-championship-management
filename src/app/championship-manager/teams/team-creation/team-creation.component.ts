import { Component, OnInit } from '@angular/core';

import TeamService from '../services';
import { RequestableTeam } from '../../../shared/models/team/team';

@Component({
  selector: 'app-scm-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.scss']
})
export class TeamCreationComponent implements OnInit {

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
  }

  addTeam(requestableTeam: RequestableTeam) {
    this._teamService.addNewTeam(requestableTeam);
  }

}
