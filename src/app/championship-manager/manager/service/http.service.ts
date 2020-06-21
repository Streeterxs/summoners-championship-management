import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Championship, RequestableChampionship } from '../../../shared/models/championship/championship';
import { environment } from '../../../../environments/environment';
import { championshipListParser, championshipParser } from '../../../shared/Fn\'s/parsers/championship-parserFn';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getChampionships(fullTextSearch?: string): Observable<Championship[]>{
    return this._http.get<RequestableChampionship[]>(
          `${environment.API_URL}/Championships`,
          fullTextSearch ? {params: {q: fullTextSearch}} : undefined
      ).pipe(map(championshipList => championshipListParser(championshipList)));
  }

  postChampionship(championship: RequestableChampionship): Observable<Championship> {
    return this._http.post<RequestableChampionship>(`${environment.API_URL}/Championships`, championship)
      .pipe(map(championshipValue => championshipParser(championshipValue)));
  }

  updateChampionship(championship: RequestableChampionship): Observable<Championship> {
    return this._http.put<RequestableChampionship>(`${environment.API_URL}/Championships/${championship.id}`, championship)
      .pipe(map(championshipValue => championshipParser(championshipValue)));
  }

  delete(championshipId: number) {
    return this._http.delete(`${environment.API_URL}/Championships/${championshipId}`);
  }
}
