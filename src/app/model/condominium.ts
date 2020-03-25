import * as admin from 'firebase';

export class Condominium {
    name: string;
    uid: string;
    chargers: any[];
    address: string;
    location: admin.firestore.GeoPoint;
    users: any[];
    responsible: {
        name: string;
        email: string;
        phone: string;
    };
}
