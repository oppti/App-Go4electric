import { Component, OnInit, Input } from '@angular/core';
import { ChargeService } from 'src/app/services/charge.service';
import { Charger } from 'src/app/model/charger';
import { MatDialog } from '@angular/material/dialog';
import { ModalChargersComponent } from '../modal-chargers/modal-chargers.component';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-charge-list',
  templateUrl: './charge-list.component.html',
  styleUrls: ['./charge-list.component.scss']
})
export class ChargeListComponent implements OnInit {

  @Input() dashboard: boolean;

  chargerList: Charger[];

  constructor(
    private service: ChargeService,
    private dialog: MatDialog,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getChargers();
  }

  getChargers() {
    if (this.dashboard) {
      this.dashboardService.getChargers().subscribe(chargers => {
        this.chargerList = chargers;
      });
    } else {
      this.service.getChargers().subscribe(chargers => {
        this.chargerList = chargers;
      });
    }
  }

  newCharge() {
    const dialogRef = this.dialog.open(ModalChargersComponent, {
      width: '50em',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.addCharger(result).subscribe(addes => {
          this.getChargers();
        });
      }
    });
  }

  del(charger: Charger) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: {
        type: 'question',
        message: 'Esta ação irá deletar carregador selecionado.<br/> Deseja continuar?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delCharger(charger.uid).subscribe(() => {
          this.getChargers();
        });
      } else {
        this.getChargers();
      }
    });
  }
  
  edit(chg: Charger) {
    const dialogRef = this.dialog.open(ModalChargersComponent, {
      width: '50em',
      data: { charger: chg, action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.editCharger(result).subscribe(() => {
          this.getChargers();
        });
      }
    });
  }

}
