import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import { TeamsComponent } from './teams.component';


const routes: Routes = [
    {
        path: '',
        component: TeamsComponent,
        children: [
            {
                path: 'list',
                component: TeamListComponent
            },
            {
                path: 'creation',
                component: TeamCreationComponent
            },
            {
                path: '',
                redirectTo: 'list'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
