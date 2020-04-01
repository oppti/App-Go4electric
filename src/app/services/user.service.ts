import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ResponseData } from '../model/responsedata';
import { Billingstatus } from '../model/billingstatus.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _ENDPOINT = 'users';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  public getUsers(): Observable<Client[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client[]));
  }

  public editUser(pUser: Client): Observable<Client> {
    if (pUser.birthday['_seconds']) {
      pUser.birthday = new Date(pUser.birthday['_seconds'] * 1000).toISOString();
    } else {
      pUser.birthday = null;
    }

    return this.http.patch(environment.apiURL + this._ENDPOINT + '/' + pUser.uid, { client: pUser }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client));
  }

  public changeStatus(pUser: Client, newStatus: Billingstatus): Observable<Client> {
    return this.http.post(environment.apiURL + this._ENDPOINT + '/' + pUser.uid + '/changeStatus',
      { billStatus: newStatus }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client));
  }

  public genKeyID(pUser: Client): Observable<string[]> {
    return this.http.post(environment.apiURL + this._ENDPOINT + '/' + pUser.uid + '/genKey',
      { userID: pUser.uid }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as string[]));
  }

  // We never should del user.
  public delUser(pUser: Client): Observable<Client> {
    return this.http.post(environment.apiURL + this._ENDPOINT + '/' + pUser.uid + '/changeStatus',
      { billStatus: Billingstatus.canceled }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client));
  }

}
