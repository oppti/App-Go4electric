import { Component, OnInit } from '@angular/core';
import { CondominiumService } from 'src/app/services/condominium.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCondominiumComponent } from '../modal-condominium/modal-condominium.component';
import { Condominium } from 'src/app/model/condominium';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-condominium-list',
  templateUrl: './condominium-list.component.html',
  styleUrls: ['./condominium-list.component.scss']
})
export class CondominiumListComponent implements OnInit {
  condoList = [];

  constructor(private service: CondominiumService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCondoms();
  }

  getCondoms() {
    this.service.getAll().subscribe(condos => {
      this.condoList = condos;
    });
  }

  add() {
    const dialogRef = this.dialog.open(ModalCondominiumComponent, {
      width: '50em',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.add(result).subscribe((added) => {
          this.getCondoms();
        });
      }
    });
  }

  edit(chg: Condominium) {
    const dialogRef = this.dialog.open(ModalCondominiumComponent, {
      width: '50em',
      data: { condo: chg, action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.edit(result).subscribe(() => {
          this.getCondoms();
        });
      }
    });
  }

  deleteCondo(condo: Condominium) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: {
        type: 'question',
        message: 'Esta ação irá deletar condominio selecionado.<br/> Deseja continuar?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.del(condo.uid).subscribe(() => {
          this.getCondoms();
        });
      } else {
        this.getCondoms();
      }
    });
  }
}
