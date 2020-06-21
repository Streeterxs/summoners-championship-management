import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import TeamService from '../services';
import { Team } from '../../../shared/models/team/team';
import { ConfirmationDialogComponent } from '../../../shared/components';

@Component({
  selector: 'app-scm-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teamList: Team[];

  constructor(
    private _teamService: TeamService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._teamService.teams$.subscribe(teams => {
      this.teamList = teams;
    });
  }

  editTeam(team: Team) {
    console.log('team to edit: ', team);
  }

  deleteTeam(team: Team) {
    console.log('team to delete: ', team);
    const configs: MatDialogConfig = {
      width: '70%'
    };
    this._dialog.open(ConfirmationDialogComponent, configs).afterClosed().subscribe(canDelete => {
      if (canDelete) {
        this._teamService.deleteTeam(team.id);
      }
    });
  }

}
