import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {NgttRound, NgttTournament} from '../declarations/interfaces';

@Component({
  selector: 'ngtt-single-elimination-tree',
  templateUrl: './single-elimination-tree.component.html',
  styleUrls: ['./single-elimination-tree.component.scss']
})
export class SingleEliminationTreeComponent implements OnInit, OnChanges {
  @Input() matchTemplate: TemplateRef<any>;
  @Input() tournament: NgttTournament;

  public bracket: NgttRound[];
  public final: NgttRound;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
    if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
      this.bracket = this.tournament.rounds;
    }
  }

}
