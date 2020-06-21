import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { TeamEditDialogComponent } from './team-edit-dialog.component';
import { TeamFormModule } from '../../team-creation/team-form/team-form.module';



@NgModule({
  declarations: [
    TeamEditDialogComponent
  ],
  imports: [
    CommonModule,
    TeamFormModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    TeamEditDialogComponent
  ]
})
export class TeamEditDialogModule { }
