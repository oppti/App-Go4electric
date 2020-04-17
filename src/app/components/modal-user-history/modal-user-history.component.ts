import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-modal-user-history',
  templateUrl: './modal-user-history.component.html',
  styleUrls: ['./modal-user-history.component.scss']
})
export class ModalUserHistoryComponent implements OnInit {

  chargeHistory: any[];
  client: Client;

  mounthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  constructor(
    public dialogRef: MatDialogRef<ModalUserHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  ngOnInit() {
    this.chargeHistory = this.data.history;
    this.client = this.data.user;
    this.processData();
  }

  processData() {
    this.chargeHistory.forEach(st => {
      const dt = new Date(st.init_date._seconds * 1000);
      st.day = dt.getDate();
      st.month = this.mounthNames[dt.getMonth()];
      st.year = dt.getFullYear();
      st.hour = dt.getHours();
      st.min = dt.getMinutes();

      st.total = st.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
  }

  closeClick(): void {
    this.dialogRef.close(false);
  }

}
