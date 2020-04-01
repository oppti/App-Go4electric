import { Component, OnInit, Inject } from '@angular/core';
import { Condominium } from 'src/app/model/condominium';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as admin from 'firebase';
import { Charger } from 'src/app/model/charger';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-modal-condominium',
  templateUrl: './modal-condominium.component.html',
  styleUrls: ['./modal-condominium.component.scss']
})
export class ModalCondominiumComponent implements OnInit {

  public publicData = { condo: null, action: null };
  public condo: Condominium;
  public title = 'Novo Condomínio';
  resName: string;
  resPhone: string;
  resMail: string;
  lat: number;
  long: number;
  selectedChargers: Charger[];
  selectedUsers: Client[];

  constructor(
    public dialogRef: MatDialogRef<ModalCondominiumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.condo = data.condo;
      this.title = this.condo.name;
      this.lat = parseFloat(this.condo.location['_latitude']);
      this.long = parseFloat(this.condo.location['_longitude']);
      this.resName = this.condo.responsible.name;
      this.resMail = this.condo.responsible.email;
      this.resPhone = this.condo.responsible.phone;
      this.selectedChargers = this.condo.chargers;
      this.selectedUsers = this.condo.users;
    } else {
      this.condo = new Condominium();
      this.condo.responsible = {
        name: '',
        email: '',
        phone: ''
      };
    }
  }

  ngOnInit() {
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  chargersChange(charges: Charger[]) {
    this.selectedChargers = charges;
  }

  usersChange(users: Client[]) {
    this.selectedUsers = users;
  }

  save(): void {
    this.condo.location = {
      _latitude: this.lat,
      _longitude: this.long
    };
    this.condo.chargers = this.selectedChargers;
    this.condo.users = this.selectedUsers;
    this.condo.responsible.name = this.resName;
    this.condo.responsible.email = this.resMail;
    this.condo.responsible.phone = this.resPhone;
    this.dialogRef.close(this.condo);
  }

}
