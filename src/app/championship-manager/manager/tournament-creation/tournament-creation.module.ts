import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentCreationComponent } from './tournament-creation.component';
import { TournamentFormModule } from './tournament-form/tournament-form.module';



@NgModule({
  declarations: [TournamentCreationComponent],
  imports: [
    CommonModule,
    TournamentFormModule
  ],
  exports: [
    TournamentCreationComponent
  ]
})
export class TournamentCreationModule { }
