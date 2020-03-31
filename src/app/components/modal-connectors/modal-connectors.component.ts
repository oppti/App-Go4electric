import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Connector } from 'src/app/model/connector';

@Component({
  selector: 'app-modal-connectors',
  templateUrl: './modal-connectors.component.html',
  styleUrls: ['./modal-connectors.component.scss']
})
export class ModalConnectorsComponent implements OnInit {
  public publicData = { conn: null, action: null };
  public conn: Connector;
  title = 'Novo conector';

  constructor(
    public dialogRef: MatDialogRef<ModalConnectorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);


    if (data.action === 'edit') {
      this.conn = data.conn;
      this.title = this.conn.name;
    } else {
      this.conn = new Connector();
    }
  }

  ngOnInit() {
  }

}
