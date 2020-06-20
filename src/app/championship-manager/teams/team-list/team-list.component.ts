import { Component, OnInit } from '@angular/core';

import TeamService from '../services';
import { Team } from '../../../shared/models/team/team';

@Component({
  selector: 'app-scm-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teamList: Team[];

  constructor(
    private _teamService: TeamService
  ) { }

  ngOnInit(): void {
    this._teamService.teams$.subscribe(teams => {
      this.teamList = teams;
    });
  }

}
