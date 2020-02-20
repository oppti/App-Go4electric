import { Component, OnInit, Inject } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']

})

export class AlertModalComponent {

  public mensage = '';
  public publicData = {  mensage: null };
  constructor(
  
    public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);
      this.mensage = data.mensage;

    }
    closeClick(ok: boolean): void {
      this.dialogRef.close(ok);
    }
}
