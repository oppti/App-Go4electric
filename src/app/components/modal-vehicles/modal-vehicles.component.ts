import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from 'src/app/model/vehicle';
import { ConnectorType } from 'src/app/model/connector-type.enum';
import { VehicleType } from 'src/app/model/vehicle-type.enum';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-modal-vehicles',
  templateUrl: './modal-vehicles.component.html',
  styleUrls: ['./modal-vehicles.component.scss']
})
export class ModalVehiclesComponent {

  public publicData = { vehicle: null, action: null };
  public vehicle: Vehicle;
  public title = '';
  public connectorList: any[];
  public typeList: any[];
  private receivedVehicle: Vehicle;

  type = VehicleType;

  constructor(
    public dialogRef: MatDialogRef<ModalVehiclesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.publicData, data);

    if (data.action === 'edit') {
      this.receivedVehicle = data.vehicle;
      this.vehicle = JSON.parse(JSON.stringify(data.vehicle)); // shallow copy
      this.title = this.vehicle.name;
    } else {
      this.title = 'Novo Veículo';
      this.vehicle = new Vehicle();
    }
    this.typeList = Object.keys(this.type);
  }



  closeClick(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    this.receivedVehicle = this.vehicle;
    this.dialogRef.close(this.vehicle);
  }
}
