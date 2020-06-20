import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ChampionshipStoreService } from '../../../core/store/championship-store.service';
import { Team } from '../../../shared/models/team/team';
import { HttpService as TeamHttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  isFetching = false;

  constructor(private _championshipStore: ChampionshipStoreService, private _teamsHttpService: TeamHttpService) { }

  get teams(): Team[] {
    if (!this._championshipStore.teams) {

    }
    return this._championshipStore.teams;
  }

  get teams$(): Observable<Team[]> {
    return this._championshipStore.teams$;
  }

  fetchTeams() {
    if (!this.isFetching) {
      this. isFetching = true;

      this._teamsHttpService.getTeams().subscribe(
        teams => {
          this._championshipStore.teams = teams;
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
    this._championshipStore.addNewTeam(team);

    this._teamsHttpService.postTeam(team).subscribe(
      (teamCreated) => {
        this._championshipStore.removeFirstTeam();
        this.addNewTeam(teamCreated);
      },
      err => {
        alert("Couldn't post team");
        this._championshipStore.removeFirstTeam();
      }
    );

  }

  updateTeam(team: Team) {
    const teamBefore = {...this._championshipStore.teamByIdentifier(team.id)};

    this._championshipStore.updateTeam(team);

    this._teamsHttpService.updateTeam(team).subscribe(
      teamReturned => {
        this._championshipStore.updateTeam(teamReturned);
      },
      err => {
        alert("Couldn't update team");
        this._championshipStore.updateTeam(teamBefore);
      }
    );

  }

  deleteTeam(teamId: number) {
    let teamDeleted;
    let teamDeletedIndex;

    this._championshipStore.teamByIdentifier(teamId, (teamFinded, index) => {
      teamDeleted = {...teamFinded};
      teamDeletedIndex = index;
    });

    this._championshipStore.removeTeam(teamId);

    this._teamsHttpService.delete(teamId).subscribe(
      () => {},
      err => {
        alert("Couldn't delete team");
        this._championshipStore.addNewTeam(teamDeleted, teamDeletedIndex);
      }
    );

  }
}
