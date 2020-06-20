import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ChampionshipStoreService } from '../../../core/store/championship-store.service';
import { Team } from '../../../shared/models/team/team';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private _championshipStore: ChampionshipStoreService) { }

  get teams(): Team[] {
    return this._championshipStore.teams;
  }

  get teams$(): Observable<Team[]> {
    return this._championshipStore.teams$;
  }
}
