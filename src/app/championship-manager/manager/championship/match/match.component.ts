import { Component, OnInit, Input } from '@angular/core';

import { Round } from '../../../../shared/models/round/round';
import { Team } from '../../../../shared/models/team/team';

@Component({
  selector: 'app-scm-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: Round;

  teams: Team[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('this match: ', this.match);

    this.teams = [this.match.team1, this.match.team2];
  }

}
