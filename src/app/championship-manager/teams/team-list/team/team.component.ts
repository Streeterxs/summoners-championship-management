import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/shared/models/team/team';

@Component({
  selector: 'app-scm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
    console.log('team: ', this.team);
  }

}
