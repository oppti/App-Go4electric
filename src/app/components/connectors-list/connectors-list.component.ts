import { Component, OnInit } from '@angular/core';
import { Connector } from 'src/app/model/connector';
import { MatDialog } from '@angular/material/dialog';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.scss']
})
export class ConnectorsListComponent implements OnInit {

  connectorList: Connector[];


  constructor(private service: ConnectorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getConnectors();
  }

  getConnectors() {
    this.service.getAll().subscribe((response) => {
      this.connectorList = response;
    });
  }

}
