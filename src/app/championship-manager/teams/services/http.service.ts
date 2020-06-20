import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Team, ITeam } from '../../../shared/models/team/team';
import { environment } from '../../../../environments/environment';
import { teamParser, teamListParser } from '../../../shared/Fn\'s/parsers/team-parserFn';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTeams(fullTextSearch?: string): Observable<Team[]>{
    return this._http.get<ITeam[]>(
      environment.API_URL,
      fullTextSearch ? {params: {q: fullTextSearch}} : undefined
    ).pipe(map(teamList => teamListParser(teamList)));
  }

  postTeam(team: Team): Observable<Team> {
    return this._http.post<ITeam>(environment.API_URL, team).pipe(map(teamValue => teamParser(teamValue)));
  }

  updateTeam(team: Team): Observable<Team> {
    return this._http.put<ITeam>(`${environment.API_URL}/${team.id}`, team).pipe(map(teamValue => teamParser(teamValue)));
  }

  delete(teamId: number) {
    return this._http.delete(`${environment.API_URL}/${teamId}`);
  }
}
