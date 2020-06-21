import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TeamStoreService, PlayerStoreService } from '../../../core/store';
import { Team, RequestableTeam } from '../../../shared/models/team/team';
import { HttpService as TeamHttpService } from './http.service';
import { Player } from '../../../shared/models/player/player';
import { playerParser } from 'src/app/shared/Fn\'s/parsers/player-parserFn';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  isFetchingTeams = false;
  isFetchingPlayers = false;

  constructor(
    private _teamStoreService: TeamStoreService,
    private _playerStoreService: PlayerStoreService,
    private _teamsHttpService: TeamHttpService
  ) { }

  get teams(): Team[] {
    if (!this._teamStoreService.teams) {
      this.fetchTeams();
    }

    return this._teamStoreService.teams;
  }

  get teams$(): Observable<Team[]> {
    if (!this._teamStoreService.teams) {
      this.fetchTeams();
    }

    return this._teamStoreService.teams$;
  }

  get players(): Player[] {
    if (!this._playerStoreService.players) {
      this.fetchPlayers();
    }

    return this._playerStoreService.players;
  }

  get players$(): Observable<Player[]> {
    if (!this._playerStoreService.players) {
      this.fetchPlayers();
    }

    return this._playerStoreService.players$;
  }

  fetchTeams(fullTextSearch?: string) {
    if (!this.isFetchingTeams) {
      this. isFetchingTeams = true;

      this._teamsHttpService.getTeams(fullTextSearch).subscribe(
        teams => {
          this._teamStoreService.teams = teams;
        },
        err => {
          alert("Couldn't fetch teams");
          this.isFetchingTeams = false;
        },
        () => {
          this.isFetchingTeams = false;
        });

    }
  }

  addNewTeam(team: RequestableTeam) {
    const {name, players} = team;

    this._teamStoreService.addNewTeam(new Team(name, players.map(player => playerParser(player))));

    this._teamsHttpService.postTeam(team).subscribe(
      (teamCreated) => {
        console.log('returned post team creation');
        this._teamStoreService.removeFirstTeam();
        this._teamStoreService.addNewTeam(teamCreated);
      },
      err => {
        console.log(err);
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

  /* Players */

  fetchPlayers(fullTextSearch?: string) {
    if (!this.isFetchingPlayers) {
      this.isFetchingPlayers = true;

      this._teamsHttpService.getPlayers(fullTextSearch).subscribe(
        playersReturned => {
          this._playerStoreService.players = playersReturned;
        },
        err => {
          alert("Couldn't fetch players");

          this.isFetchingPlayers = false;
        },
        () => {
          this.isFetchingPlayers = false;
        }
      );
    }
  }
}
