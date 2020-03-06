import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Billingstatus } from 'src/app/model/billingstatus.enum';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent {
  public publicDataUsers = { client: null, action: null };
  public title = '';
  public sub = '';
  public client: Client;
  public statusList: any[];

  status = Billingstatus;


  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    Object.assign(this.publicDataUsers, data);

    this.client = data.client;
    this.title = this.client.name || 'Cadastro incompleto';
    this.sub = this.client.phone;

    this.statusList = Object.keys(this.status);
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.client);
  }

  genKey(): void {
    this.userService.genKeyID(this.client).subscribe((response) => {
      this.client.keyID = response;
    }, (err) => {
      console.error(err);
    });
  }

}
