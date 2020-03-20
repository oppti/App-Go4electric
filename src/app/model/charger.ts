import { ConnectorType } from './connector-type.enum';
import * as admin from 'firebase';

export class Charger {
    uid: string;
    name: string;
    location: admin.firestore.GeoPoint;
    address: string;
    connectors: ConnectorType[];
    isTurbo: boolean;
    isPrivate: boolean;
    price: string;
    nansenID: string;
}