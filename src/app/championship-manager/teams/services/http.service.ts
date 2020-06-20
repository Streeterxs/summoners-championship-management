import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Team } from '../../../shared/models/team/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<Team[]>{
    return this._http.get<Team[]>(environment.API_URL);
  }

  postTeam(team: Team): Observable<Team> {
    return this._http.post<Team>(environment.API_URL, team);
  }

  updateTeam(team: Team): Observable<Team> {
    return this._http.put<Team>(`${environment.API_URL}/${team.id}`, team);
  }

  delete(teamId: number) {
    return this._http.delete(`${environment.API_URL}/${teamId}`);
  }
}
