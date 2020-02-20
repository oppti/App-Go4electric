import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Billingstatus } from 'src/app/model/billingstatus.enum';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent {
  public publicData = { client: null, action: null };
  public title = '';
  public client: Client;
  public statusList: any[];

  status = Billingstatus;


  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.client = data.client;
      this.title = this.client.name;
    }

    this.statusList = Object.keys(this.status);
    return;
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.client);
  }

}
