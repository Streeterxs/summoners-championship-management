import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Team } from '../../../shared/models/team/team';

export type teamByIdentifierCallback = (team: Team, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class TeamStoreService {
  private _teams: BehaviorSubject<Team[]> = new BehaviorSubject(null);
  teams$ = this._teams.asObservable();

  constructor() { }

  get teams(): Team[] {
    return this._teams.value;
  }

  set teams(newTeamList: Team[]) {
    this._teams.next(newTeamList);
  }

  addNewTeam(team: Team, index?: number) {

    if (index) {
      this.teams.splice(index, 0, team);
      this.teams = this.teams;

      return;
    }

    this._teams.next([{...team} as Team].concat(this.teams));
  }

  teamByIdentifier(id: number, callback?: teamByIdentifierCallback) {
    const index = this.teams.findIndex(team => team.id === id);

    if (index !== -1) {
      if (callback) { callback(this.teams[index], index); }

      return this.teams[index];
    }
  }

  updateTeam(team: Team) {
    this.teamByIdentifier(team.id, (teamFinded, index) => {
      teamFinded = team;
      this.teams = this.teams;
    });
  }

  removeTeam(id: number) {
    this.teamByIdentifier(id, (teamFinded, index) => {
      this.teams.splice(index, 1);
      this.teams = this.teams;
    });
  }

  removeFirstTeam() {
    this.teams.splice(0, 1);
    this.teams = this.teams;
  }

  removeLastTeam() {
    this.teams.splice(this.teams.length - 1, 1);
    this.teams = this.teams;
  }
}
