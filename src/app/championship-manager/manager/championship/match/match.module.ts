import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MatchComponent } from './match.component';



@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatchComponent
  ]
})
export class MatchModule { }
