import { Component, OnInit } from '@angular/core';

import { ManagerStoreService } from '../../../core/store';
import { Championship } from 'src/app/shared/models/championship/championship';

import { NgttTournament } from 'ng-tournament-tree';

@Component({
  selector: 'app-scm-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {

  championship: Championship;

  public singleEliminationTournament: NgttTournament;

  constructor(private _managerService: ManagerStoreService) { }

  ngOnInit(): void {
    this.championship = this._managerService.championship;

    this.singleEliminationTournament = {
      rounds: this.championship.phases.map((phase, index) => {
        console.log('phase: ', phase);
        return {
          type: index === this.championship.phases.length - 1 ? 'Final' : 'Winnerbracket',
          matches: phase
        };
      })
    };

    console.log('singleEliminationTournament: ', this.singleEliminationTournament);
  }

}
