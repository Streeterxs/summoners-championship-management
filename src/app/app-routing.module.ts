import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'summoners-championship',
        loadChildren: () => import('./championship-manager/championship-manager.module').then(m => m.ChampionshipManagerModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/summoners-championship'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
