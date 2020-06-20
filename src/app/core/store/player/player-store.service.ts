import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Player } from '../../../shared/models/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreService {
  private _players: BehaviorSubject<Player[]> = new BehaviorSubject(null);
  players$ = this._players.asObservable();

  constructor() { }

  get players() {
    return this._players.value;
  }

  set players(newPlayersList) {
    this._players.next(newPlayersList);
  }
}
