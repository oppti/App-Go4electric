import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/model/vehicle';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { ModalVehiclesComponent } from 'src/app/components/modal-vehicles/modal-vehicles.component';
import { Observable } from 'rxjs';
import { Billingstatus } from 'src/app/model/billingstatus.enum';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ModalUserHistoryComponent } from '../modal-user-history/modal-user-history.component';


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

  @Input() dashboard: boolean;

  constructor(
    private userService: UserService,
    private dashboardService: DashboardService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    if (this.dashboard) {
      this.dashboardService.getUsers().subscribe((clients: Client[]) => {
        this.clientList = clients.sort((a, b) => a.displayName.localeCompare(b.displayName));
      });
    } else {
      this.userService.getUsers().subscribe((clients: Client[]) => {
        this.clientList = clients.sort((a, b) => a.displayName.localeCompare(b.displayName));
      });
    }
  }

  editUsers(data) {
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '40em',
      data: { client: data, type: 'update', action: 'edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientList = [];
        this.userService.editUser(result).subscribe(() => {
          this.getUsers();
        }, (error) => {
          console.log(error);
          this.dialog.open(AlertModalComponent, {
            width: '400px',
            data: {
              type: 'alert',
              message: 'Erro para editar o usuário <br/>' + error.message
            }
          }).afterClosed().toPromise().then(() => {
            this.getUsers();
          });
        });
      }
    });
  }

  changeStatus(client: Client) {
    if (client.billingStatus === Billingstatus.active) {
      this.userService.changeStatus(client, Billingstatus.blocked).subscribe(() => {
        this.getUsers();
      }, () => this.getUsers());
    } else {
      this.userService.changeStatus(client, Billingstatus.active).subscribe(() => {
        this.getUsers();
      }, () => this.getUsers());
    }
  }

  viewCharges(client: Client) {
    this.dashboardService.getUserHistory(client.uid).subscribe((response) => {
      const dialogRef = this.dialog.open(ModalUserHistoryComponent, {
        width: '50em',
        data: { history: response, user: client }
      });
    });
  }

}
