import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TeamStoreService } from '../../../core/store';
import { Team } from '../../../shared/models/team/team';
import { HttpService as TeamHttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  isFetching = false;

  constructor(private _teamStoreService: TeamStoreService, private _teamsHttpService: TeamHttpService) { }

  get teams(): Team[] {
    if (!this._teamStoreService.teams) {

    }
    return this._teamStoreService.teams;
  }

  get teams$(): Observable<Team[]> {
    return this._teamStoreService.teams$;
  }

  fetchTeams() {
    if (!this.isFetching) {
      this. isFetching = true;

      this._teamsHttpService.getTeams().subscribe(
        teams => {
          this._teamStoreService.teams = teams;
        },
        err => {
          alert("Couldn't fetch teams");
          this.isFetching = false;
        },
        () => {
          this.isFetching = false;
        });

    }
  }

  addNewTeam(team: Team) {
    this._teamStoreService.addNewTeam(team);

    this._teamsHttpService.postTeam(team).subscribe(
      (teamCreated) => {
        this._teamStoreService.removeFirstTeam();
        this.addNewTeam(teamCreated);
      },
      err => {
        alert("Couldn't post team");
        this._teamStoreService.removeFirstTeam();
      }
    );

  }

  updateTeam(team: Team) {
    const teamBefore = {...this._teamStoreService.teamByIdentifier(team.id)} as Team;

    this._teamStoreService.updateTeam(team);

    this._teamsHttpService.updateTeam(team).subscribe(
      teamReturned => {
        this._teamStoreService.updateTeam(teamReturned);
      },
      err => {
        alert("Couldn't update team");
        this._teamStoreService.updateTeam(teamBefore);
      }
    );

  }

  deleteTeam(teamId: number) {
    let teamDeleted;
    let teamDeletedIndex;

    this._teamStoreService.teamByIdentifier(teamId, (teamFinded, index) => {
      teamDeleted = {...teamFinded};
      teamDeletedIndex = index;
    });

    this._teamStoreService.removeTeam(teamId);

    this._teamsHttpService.delete(teamId).subscribe(
      () => {},
      err => {
        alert("Couldn't delete team");
        this._teamStoreService.addNewTeam(teamDeleted, teamDeletedIndex);
      }
    );

  }
}
