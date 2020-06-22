import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Championship } from '../../../shared/models/championship/championship';


export type championshipByIdentifierCallback = (championship: Championship, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class ManagerStoreService {

  private _championships: BehaviorSubject<Championship[]> = new BehaviorSubject(null);
  championships$ = this._championships.asObservable();

  private _championship: BehaviorSubject<Championship> = new BehaviorSubject(null);
  championship$ = this._championship.asObservable();

  constructor() { }

  get championships() {
    return this._championships.value;
  }
  set championships(newChampionships: Championship[]) {
    this._championships.next(newChampionships);
  }

  get championship() {
    return this._championship.value;
  }
  set championship(newChampionship: Championship) {
    this._championship.next(newChampionship);
  }

  addNewChampionship(Championship: Championship, index?: number) {

    if (index) {
      this.championships.splice(index, 0, Championship);
      this.championships = this.championships;

      return;
    }

    this._championships.next(this.championships.concat(Championship));
  }

  championshipByIdentifier(id: number, callback?: championshipByIdentifierCallback) {
    const index = this.championships.findIndex(Championship => Championship.id === id);

    if (index !== -1) {
      if (callback) { callback(this.championships[index], index); }

      return this.championships[index];
    }
  }

  updateChampionship(Championship: Championship) {
    this.championshipByIdentifier(Championship.id, (ChampionshipFinded, index) => {
      ChampionshipFinded = Championship;
      this.championships = this.championships;
    });
  }

  removeChampionship(id: number) {
    this.championshipByIdentifier(id, (ChampionshipFinded, index) => {
      this.championships.splice(index, 1);
      this.championships = this.championships;
    });
  }

  removeFirstChampionship() {
    this.championships.splice(0, 1);
    this.championships = this.championships;
  }

  removeLastChampionship() {
    this.championships.splice(this.championships.length - 1, 1);
    this.championships = this.championships;
  }
}
