import { Component, OnInit, Inject } from '@angular/core';
import { ChargePoints } from 'src/app/model/charge-points';
import { ConnectorType } from 'src/app/model/connector-type.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-charges',
  templateUrl: './modal-charges.component.html',
  styleUrls: ['./modal-charges.component.scss']
})
export class ModalChargesComponent {

  public publicData = { charge: null, action: null };
  public charge: ChargePoints;
  public title = '';
  public connectorList: any[];

  connectorType = ConnectorType;

  constructor(
    public dialogRef: MatDialogRef<ModalChargesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.charge = data.vehicle;
      this.title = this.charge.name;
    } else {
      this.title = 'New Charge';
      this.charge = new ChargePoints();
    }

    this.connectorList = Object.keys(this.connectorType);
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.charge);
  }
}