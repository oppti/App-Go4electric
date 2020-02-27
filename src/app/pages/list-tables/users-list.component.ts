import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ChargeService } from 'src/app/services/charge.service';
import { ChargePoints } from 'src/app/model/charge-points';
import { Vehicle } from 'src/app/model/vehicle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { ModalVehiclesComponent } from 'src/app/components/modal-vehicles/modal-vehicles.component';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AlertModalComponent } from 'src/app/components/alert-modal/alert-modal.component';
import { ModalChargesComponent } from 'src/app/components/modal-charges/modal-charges.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  items: Observable<any[]>;
  clientList: Client[];
  vehicleList: Vehicle[];
  chargeList: ChargePoints[];

  datasource: any;

  searchTextUsers;
  searchTextVehicles;
  searchTextCharges;

  constructor(private userService: UserService, private vehiclesService: VehiclesService,
    private chargeService: ChargeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
    this.getVehicles();
    this.getCharges();
  }

  getCharges() {
    this.chargeService.getCharges().subscribe((charge: ChargePoints[]) => {
      this.chargeList = charge;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
    });
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

  deleteVehicle(vehicle: Vehicle) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: { mensage: 'Deseja mesmo deletar este campo?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === vehicle) {
        this.vehiclesService.delVehicle(vehicle.uid).subscribe(() => {
          this.getVehicles();
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
      }
    });
  }

  deleteUser(client: Client) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '400px',
      data: { mensage: 'Deseja mesmo deletar este campo?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === client) {
        this.userService.delUser(client.uid).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }

  editUsers(pUser) {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '50em',
      data: { client: pUser, action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.editUser(result).subscribe(() => {
          this.getUsers();
        });
      }
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

}
