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
  // displayedColumns: string[] = ['name', 'value', 'functions'];
  clientList: Client[];
  vehicleList: Vehicle[];
  datasource: any;
  // dataSource: Observable<{ key: string; }[]>;

  constructor(private userService: UserService, private vehiclesService: VehiclesService,
    public dialog: MatDialog, private db: AngularFireDatabase) {
    this.datasource = this.db.list('item').snapshotChanges()
      .pipe(map(items => {
        return items.map(item => {
          return Object.assign({ key: item.payload.key }, item.payload.val());
        });
      }));
  }

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
      if (result) {
        this.db.list('go4electric-dev').push(result);
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
          this.vehicleList.push(added);
        });
      }
    });
  }

  delete(key) {
    this.db.list('item').remove(key);
  }

  editUsers(data = null) {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '500px',
      data: { ...data, type: 'update' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('item').update(result.key, result);
      }
    });
  }

  editVehicles(pVehicle) {
    const dialogRef = this.dialog.open(ModalVehiclesComponent, {
      width: '50em',
      data: { vehicle: pVehicle, action: 'edit'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.db.list('item').update(result.key, result);
        this.vehiclesService.editVehicle(result).subscribe(() => {
          this.vehiclesService.getVehicles().subscribe((vehicles) => {
            this.vehicleList = vehicles;
          });
        });
      }
    });
  }

}
