import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Team, RequestableTeam } from '../../../../shared/models/team/team';
import { TeamFormComponent } from '../../team-creation/team-form/team-form.component';

@Component({
  selector: 'app-team-edit-dialog',
  templateUrl: './team-edit-dialog.component.html',
  styleUrls: ['./team-edit-dialog.component.scss']
})
export class TeamEditDialogComponent implements OnInit {

  @ViewChild('teamForm') teamForm: TeamFormComponent;

  constructor(
      public dialogRef: MatDialogRef<TeamEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public team: Team
    ) { }

  ngOnInit(): void {
  }

  editTeam(teamToEdit: Team) {
    this.dialogRef.close(teamToEdit);
  }

  cancel() {
    this.dialogRef.close(false);
  }

  confirm() {
    this.teamForm.formEditSubmit();
  }

  clearForm() {
    this.teamForm.clearForm();
  }

}
