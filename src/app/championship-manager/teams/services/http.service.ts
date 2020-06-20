import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Team } from '../../../shared/models/team/team';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  /* getTeams(): Observable<Team[]>{
    return this._http.get
  } */
}
