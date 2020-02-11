import { VehicleType } from './vehicle-type.enum';
import { ConnectorType } from './connector-type.enum';

export class Vehicle {
    uid: string;
    name: string;
    model: string;
    brand: string;
    type: VehicleType;
    connectorType: ConnectorType;
}
