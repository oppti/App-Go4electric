import { Component, OnInit, Inject } from '@angular/core';
import { Charger } from 'src/app/model/charger';
import { ConnectorType } from 'src/app/model/connector-type.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-chargers',
  templateUrl: './modal-chargers.component.html',
  styleUrls: ['./modal-chargers.component.scss']
})
export class ModalChargersComponent {

  public publicData = { charge: null, action: null };
  public charge: Charger;
  public title = '';
  public connectorList: any[];

  connectorType = ConnectorType;

  constructor(
    public dialogRef: MatDialogRef<ModalChargersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.charge = data.vehicle;
      this.title = this.charge.name;
    } else {
      this.title = 'New Charge';
      this.charge = new Charger();
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
