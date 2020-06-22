import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Round } from '../../../../shared/models/round/round';
import { Team } from '../../../../shared/models/team/team';


export type TeamClickEvent = {
  team: Team;
  match: Round;
};
@Component({
  selector: 'app-scm-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: Round;

  teams: Team[] = [];

  @Output() teamClick: EventEmitter<TeamClickEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('this match: ', this.match);

    this.teams = [this.match.team1, this.match.team2];
  }

  clickedTeam(team: Team) {
    if (team) {
      this.teamClick.emit({team, match: this.match});
    }
  }

}
