import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TeamComponent } from './team.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
