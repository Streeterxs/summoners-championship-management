import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { TournamentCreationComponent } from './tournament-creation/tournament-creation.component';
import { ChampionshipComponent } from './championship/championship.component';


const routes: Routes = [
    {
        path: '',
        component: ManagerComponent,
        children: [
          {
            path: 'creation',
            component: TournamentCreationComponent
          },
          {
            path: 'brackets',
            component: ChampionshipComponent
          },
          {
            path: '',
            redirectTo: 'creation'
          },
          {
            path: '**',
            redirectTo: 'creation'
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
