import { Component, OnInit } from '@angular/core';
import { Connector } from 'src/app/model/connector';
import { MatDialog } from '@angular/material/dialog';
import { ConnectorService } from 'src/app/services/connector.service';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.scss']
})
export class ConnectorsListComponent implements OnInit {

  connectorList: Connector[];


  constructor(private service: ConnectorService, private dialog: MatDialog,
              private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getConnectors();
  }

  getConnectors() {
    this.service.getAll().subscribe(async (values) => {

      for (const conn of values) {
        const icon = await this.storage.ref(conn.icon).getDownloadURL().toPromise();
        conn.icon = icon;
      }
      this.connectorList = values;
    });
  }

}
