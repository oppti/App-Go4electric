import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/model/vehicle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { ModalVehiclesComponent } from 'src/app/components/modal-vehicles/modal-vehicles.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  clientList: Client[];
  vehicleList: Vehicle[];

  constructor(private userService: UserService, private vehiclesService: VehiclesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
    });

    this.vehiclesService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicleList = vehicles;
    });
  }

  insertUsers() {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  insertVehicles() {
    const dialogRef = this.dialog.open(ModalVehiclesComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
