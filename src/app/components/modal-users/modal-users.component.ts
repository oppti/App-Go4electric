import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent {
  public title = 'Criar';
  public modalData = { name: null, value: null, type: null };
  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.modalData, data);
    this.title = (this.modalData.type != 'create') ? 'Atualizar' : 'Criar';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
