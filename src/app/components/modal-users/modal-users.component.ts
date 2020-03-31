import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Billingstatus } from 'src/app/model/billingstatus.enum';
import { UserService } from 'src/app/services/user.service';
import { Charger } from 'src/app/model/charger';

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
  selectedChargers: Charger[];

  status = Billingstatus;


  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    Object.assign(this.publicDataUsers, data);

    this.client = data.client;
    this.title = this.client.name || 'Cadastro incompleto';
    this.sub = this.client.phone;
    this.selectedChargers = this.client.chargers;

    this.statusList = Object.keys(this.status);
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  chargersChange(charges: Charger[]) {
    this.selectedChargers = charges;
  }

  save(): void {
    this.client.chargers = this.selectedChargers;
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
