import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionshipManagerRoutingModule { }
