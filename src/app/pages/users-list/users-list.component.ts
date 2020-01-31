import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  clientList: Client[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
    });
  }

}
