import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { isNullOrUndefined } from 'util';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-modal-reset-password',
  templateUrl: './modal-reset-password.component.html',
  styleUrls: ['./modal-reset-password.component.scss']
})
export class ModalResetPasswordComponent implements OnInit {

  email: string;
  onError: boolean;

  constructor(private dialogRef: MatDialogRef<ModalResetPasswordComponent>) { }

  ngOnInit() {
    this.onError = false;
  }

  change(): void {
    if (isNullOrUndefined(this.email) || this.email === '') {
      this.onError = true;
    } else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.dialogRef.close(this.email);
      } else {
        this.onError = true;
      }
    }
  }

  closeClick(): void {
    this.dialogRef.close(false);
  }

}
