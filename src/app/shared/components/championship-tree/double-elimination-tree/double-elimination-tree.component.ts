import {Component, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {NgttRound, NgttTournament} from '../declarations/interfaces';

@Component({
  selector: 'ngtt-double-elimination-tree',
  templateUrl: './double-elimination-tree.component.html',
  styleUrls: ['./double-elimination-tree.component.scss']
})
export class DoubleEliminationTreeComponent implements OnChanges {
  @Input() matchTemplate: TemplateRef<any>;
  @Input() tournament: NgttTournament;

  public losersBracket: NgttRound[];
  public winnersBracket: NgttRound[];
  public final: NgttRound;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.losersBracket = this.tournament.rounds.filter(round => {
      return round.type === 'Loserbracket';
    });
    this.winnersBracket = this.tournament.rounds.filter(round => {
      return round.type === 'Winnerbracket';
    });
    this.final = this.tournament.rounds.filter(round => {
      return round.type === 'Final';
    }).shift();
  }

}
