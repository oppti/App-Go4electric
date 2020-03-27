import { Component, OnInit, Inject } from '@angular/core';
import { Charger } from 'src/app/model/charger';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-chargers',
  templateUrl: './modal-chargers.component.html',
  styleUrls: ['./modal-chargers.component.scss']
})
export class ModalChargersComponent {

  public publicData = { charge: null, action: null };
  public conn: Charger;
  public title = '';

  constructor(
    public dialogRef: MatDialogRef<ModalChargersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.conn = data.charger;
      this.title = this.conn.name;
    } else {
      this.title = 'Novo Carregador';
      this.conn = new Charger();
    }
  }

  changeConnectors(connectors) {
    this.conn.connectors = connectors;
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.conn);
  }
}
