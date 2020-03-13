import { Component, OnInit } from '@angular/core';
import { ChargePoints } from 'src/app/model/charge-points';
import { ChargeService } from 'src/app/services/charge.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalChargesComponent } from '../modal-charges/modal-charges.component';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  chargeList: ChargePoints[];
  searchTextCharges;

  constructor(private chargeService: ChargeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCharges();
  }

  getCharges() {
    this.chargeService.getCharges().subscribe((charge: ChargePoints[]) => {
      this.chargeList = charge;
    });
  }

  insertCharges() {
    const dialogRef = this.dialog.open(ModalChargesComponent, {
      width: '50em',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.chargeService.addCharges(result).subscribe((added) => {
          this.getCharges();
        });
      }
    });
  }

  editCharges(pCharge) {
    const dialogRef = this.dialog.open(ModalChargesComponent, {
      width: '50em',
      data: { charge: pCharge, action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.chargeService.editCharges(result).subscribe(() => {
          this.getCharges();
        });
      }
    });
  }


  deleteCharges(charge: ChargePoints) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: { mensage: 'Deseja mesmo deletar este campo?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === charge) {
        this.chargeService.delCharges(charge.uid).subscribe(() => {
          this.getCharges();
        });
      } else { }
    });
  }

}
