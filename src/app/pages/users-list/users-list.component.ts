import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Client } from 'src/app/model/client';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  clientList: Client[];
  vehicleList: Vehicle[];

  constructor(private userService: UserService, private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((clients: Client[]) => {
      this.clientList = clients;
    });

    this.vehiclesService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicleList = vehicles;
    });
  }

}
