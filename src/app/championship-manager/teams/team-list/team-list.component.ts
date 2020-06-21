import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import TeamService from '../services';
import { Team } from '../../../shared/models/team/team';
import { ConfirmationDialogComponent } from '../../../shared/components';
import { TeamEditDialogComponent } from './team-edit-dialog/team-edit-dialog.component';

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
      console.log('team changed: ', teams);
      this.teamList = teams;
    });
  }

  editTeam(team: Team) {
    console.log('team to edit: ', team);
    const configs: MatDialogConfig = {
      width: '70%',
      disableClose: false,
      autoFocus: false,
      data: team
    };

    this._dialog.open(TeamEditDialogComponent, configs).afterClosed().subscribe(teamToRequest => {
      if (teamToRequest) {
        this._teamService.updateTeam(teamToRequest);
      }
    });
  }

  deleteTeam(team: Team) {
    const configs: MatDialogConfig = {
      width: '70%'
    };
    this._dialog.open(ConfirmationDialogComponent, configs).afterClosed().subscribe(canDelete => {
      if (canDelete) {
        this._teamService.deleteTeam(team.id);
      }
    });
  }

  optimisticFilter(textToSearch: string) {
    this._teamService.fullTextStringToFilter.next(textToSearch);
  }

  filterTeams(textToSearch: string) {
    console.log('textToSearch: ', textToSearch);
    this._teamService.filterTeams(textToSearch);
  }

}
