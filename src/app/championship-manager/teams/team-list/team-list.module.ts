import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { TeamListComponent } from './team-list.component';
import { ConfirmationDialogModule } from '../../../shared/components';



@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    ConfirmationDialogModule,
    MatDialogModule
  ],
  exports: [
    TeamListComponent
  ]
})
export class TeamListModule { }
