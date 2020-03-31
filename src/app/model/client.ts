import { Billingstatus } from './billingstatus.enum';
import { Charger } from './charger';

export class Client {
    uid: string;
    displayName: string;
    name: string;
    email: string;
    chargers: Charger[];
    // birthday: admin.firestore.Timestamp;
    phone: string;
    cpf: string;
    photo: string;  // should be an URL
    fcmToken: string[];
    keyID: string[];
    billingStatus: Billingstatus;
}
