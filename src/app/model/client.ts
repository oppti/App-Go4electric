import { Billingstatus } from './billingstatus.enum';

export class Client {
    uid: string;
    name: string;
    email: string;
    // birthday: admin.firestore.Timestamp;
    phone: string;
    cpf: string;
    photo: string;  // should be an URL
    fcmToken: string[];
    keyID: string[];
    billingStatus: Billingstatus;
}
