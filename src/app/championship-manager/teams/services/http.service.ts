import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Team, ITeam, RequestableTeam } from '../../../shared/models/team/team';
import { environment } from '../../../../environments/environment';
import { teamParser, teamListParser } from '../../../shared/Fn\'s/parsers/team-parserFn';
import { IPlayer, Player } from 'src/app/shared/models/player/player';
import { playerListParser } from 'src/app/shared/Fn\'s/parsers/player-parserFn';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTeams(fullTextSearch?: string): Observable<Team[]>{
    return this._http.get<ITeam[]>(
          `${environment.API_URL}/teams`,
          fullTextSearch ? {params: {q: fullTextSearch}} : undefined
      ).pipe(map(teamList => teamListParser(teamList)));
  }

  postTeam(team: RequestableTeam): Observable<Team> {
    return this._http.post<ITeam>(`${environment.API_URL}/teams`, team)
      .pipe(map(teamValue => teamParser(teamValue)));
  }

  updateTeam(team: RequestableTeam): Observable<Team> {
    return this._http.put<ITeam>(`${environment.API_URL}/teams/${team.id}`, team)
      .pipe(map(teamValue => teamParser(teamValue)));
  }

  delete(teamId: number) {
    return this._http.delete(`${environment.API_URL}/teams/${teamId}`);
  }

  getPlayers(fullTextSearch?: string): Observable<Player[]> {
    return this._http.get<IPlayer[]>(
        `${environment.API_URL}/players`, fullTextSearch ?
        {params: {q: fullTextSearch}} : undefined
      ).pipe(map(iplayerList => playerListParser(iplayerList)));
  }
}
