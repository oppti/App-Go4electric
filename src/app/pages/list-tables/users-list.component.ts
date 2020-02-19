import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/model/vehicle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { ModalVehiclesComponent } from 'src/app/components/modal-vehicles/modal-vehicles.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  items: Observable<any[]>;
  clientList: Client[];
  vehicleList: Vehicle[];
  datasource: any;

  constructor(private userService: UserService, private vehiclesService: VehiclesService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
    });

    this.getVehicles();
  }

  getVehicles() {
    this.vehiclesService.getVehicles().subscribe((vehicles) => {
      this.vehicleList = vehicles;
    });
  }

  insertUsers() {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.db.list('go4electric-dev').push(result);
      }
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
    // FAZER DIALOG DE CONFIRMAÇÃO
    this.vehiclesService.delVehicle(vehicle.uid).subscribe(() => {
      this.getVehicles();
    });
  }

  editUsers(data = null) {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '500px',
      data: { ...data, type: 'update' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.db.list('item').update(result.key, result);
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

}
