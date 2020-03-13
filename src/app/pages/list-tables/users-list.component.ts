import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUsersComponent } from 'src/app/components/modal-users/modal-users.component';
import { AlertModalComponent } from 'src/app/components/alert-modal/alert-modal.component';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  clientList: Client[];

  searchTextUsers;


  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
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
      } else { }
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

}
