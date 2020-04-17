import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-password-change',
  templateUrl: './modal-password-change.component.html',
  styleUrls: ['./modal-password-change.component.scss']
})
export class ModalPasswordChangeComponent implements OnInit {
  publicData: any;
  userEmail: string;
  userPass: string;
  newPass: string;
  newPassVerify: string;
  invalid: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalPasswordChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit() {
    this.userEmail = this.data.mail;
    this.invalid = false;
  }

  closeClick(): void {
    this.dialogRef.close();
  }

  save() {
    if (this.newPassVerify !== this.newPass) {
      this.invalid = true;
    } else {
      this.dialogRef.close({userMail: this.userEmail, userPass: this.userPass, newPass: this.newPass});
    }
  }

}
