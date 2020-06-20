import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  navLinks = [
    {
      path: 'list',
      label: 'Team List'
    },
    {
      path: 'creation',
      label: 'Team Creation'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
