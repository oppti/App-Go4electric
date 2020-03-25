import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private admin: boolean;

  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFirestore) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(async value => {
          const token = await value.user.getIdToken();
          const uid = await value.user.uid;
          const cond = await this.db.collection('condominium').doc(uid).get().toPromise();
          if (cond.exists) {
            this.admin = false;
          } else {
            this.admin = true;
          }

          localStorage.setItem('token', token);
          localStorage.setItem('uid', value.user.uid);

          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  isLogged() {
    return this.firebaseAuth.authState.pipe(first()).toPromise();
  }

  isAdmin() {
    return this.admin;
  }

  logout() {
    this.firebaseAuth.auth.signOut().then((value) => {
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
    }).catch(e => {
      console.error(e);
    });
  }
}
