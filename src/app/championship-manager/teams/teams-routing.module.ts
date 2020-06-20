import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';


const routes: Routes = [
    {
        path: 'list',
        component: TeamListComponent
    },
    {
        path: 'creation',
        component: TeamCreationComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
