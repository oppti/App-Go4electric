import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/model/vehicle';
import { ModalVehiclesComponent } from '../modal-vehicles/modal-vehicles.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicleList: Vehicle[];

  constructor(private vehiclesService: VehiclesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vehiclesService.getVehicles().subscribe((vehicles) => {
      this.vehicleList = vehicles;
    });
  }

  insertVehicles() {
    const dialogRef = this.dialog.open(ModalVehiclesComponent, {
      width: '50em',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vehiclesService.addVehicle(result).subscribe((added) => {
          this.getVehicles();
        });
      }
    });
  }

  deleteVehicle(vehicle: Vehicle) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: {
        type: 'question',
        message: 'Esta ação irá deletar veículo selecionado.<br/> Deseja continuar?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === vehicle) {
        this.vehiclesService.delVehicle(vehicle.uid).subscribe(() => {
          this.getVehicles();
        });
      } else { }
    });
  }

  editVehicles(pVehicle) {
    const dialogRef = this.dialog.open(ModalVehiclesComponent, {
      width: '50em',
      data: { vehicle: pVehicle, action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vehiclesService.editVehicle(result).subscribe(() => {
          this.getVehicles();
        });
      }
    });
  }
}
