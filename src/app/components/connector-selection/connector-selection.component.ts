import { Component, OnInit, Input } from '@angular/core';
import { ConnectorService } from 'src/app/services/connector.service';
import { Connector } from 'src/app/model/connector';
import {
  AngularFireStorage,
} from 'angularfire2/storage';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-connector-selection',
  templateUrl: './connector-selection.component.html',
  styleUrls: ['./connector-selection.component.scss']
})
export class ConnectorSelectionComponent implements OnInit {
  connectorList: Connector[];
  @Input() selectedConnectors: Connector[];

  constructor(private connectorService: ConnectorService, private storage: AngularFireStorage) {
  }

  getConnectors() {
    this.connectorService.getAll().subscribe(async values => {

      for (const conn of values) {
        const icon = await this.storage.ref(conn.icon).getDownloadURL().toPromise();
        conn.iconURL = icon;
      }

      this.connectorList = values;
    });
  }

  checkIsSelected(conn: Connector) {
    const filter = this.selectedConnectors.filter(connector => connector.name === conn.name);
    if (filter.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    if (isNullOrUndefined(this.selectedConnectors)) {
      this.selectedConnectors = [];
    }
    this.getConnectors();
  }

  onClick(conn: Connector) {
    const filter = this.selectedConnectors.filter(connector => connector.name === conn.name);
    if (filter.length === 0) {
      this.selectedConnectors.push(conn);
    } else {
      this.selectedConnectors.forEach((connector, index) => {
        if (connector.name === conn.name) {
          this.selectedConnectors.splice(index, 1);
        }
      });
    }
  }

}
