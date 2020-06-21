import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

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

  fullTextStringToFilter = new BehaviorSubject<string>('');
  debouncedEvent = new BehaviorSubject<void>(null).pipe(debounceTime(400));

  constructor(
    private _teamStoreService: TeamStoreService,
    private _playerStoreService: PlayerStoreService,
    private _teamsHttpService: TeamHttpService
  ) { }

  get teams(): Team[] {
    if (!this._teamStoreService.teams) {
      this.fetchTeams();
    }

    return this._teamStoreService.teams?.filter(team => team.fullTextSearch(this.fullTextStringToFilter.value));
  }

  get teams$(): Observable<Team[]> {
    if (!this._teamStoreService.teams) {
      this.fetchTeams();
    }

    return combineLatest([
        this._teamStoreService.teams$,
        this.fullTextStringToFilter.asObservable()
      ])
        .pipe(
          map(
            combinedValues => combinedValues[0]?.filter(team => team.fullTextSearch(combinedValues[1]))
          )
        );
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

  fetchTeams() {
    if (!this.isFetchingTeams) {
      this. isFetchingTeams = true;

      this._teamsHttpService.getTeams().pipe(debounceTime(500)).subscribe(
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

  filterTeams(textToSearch: string) {
    this._teamsHttpService.getTeams(textToSearch).pipe(debounceTime(500)).subscribe(
      teams => {
        this._teamStoreService.teams = teams;
      },
      err => {
        alert("Couldn't fetch teams");
      });
  }

  addNewTeam(team: RequestableTeam) {
    const {name, players} = team;

    this._teamStoreService.addNewTeam(new Team(name, players.map(player => playerParser(player))));

    this._teamsHttpService.postTeam(team).pipe(debounceTime(500)).subscribe(
      (teamCreated) => {
        this._teamStoreService.removeLastTeam();
        this._teamStoreService.addNewTeam(teamCreated);
      },
      err => {
        console.log(err);
        alert("Couldn't post team");
        this._teamStoreService.removeLastTeam();
      }
    );

  }

  updateTeam(team: Team) {
    const teamBefore = {...this._teamStoreService.teamByIdentifier(team.id)} as Team;

    this._teamStoreService.updateTeam(team);

    this._teamsHttpService.updateTeam(team).pipe(debounceTime(500)).subscribe(
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

    this._teamsHttpService.delete(teamId).pipe(debounceTime(400)).subscribe(
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

      this._teamsHttpService.getPlayers(fullTextSearch).pipe(debounceTime(500)).subscribe(
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
