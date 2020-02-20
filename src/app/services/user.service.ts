import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ResponseData } from '../model/responsedata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  public getUsers(): Observable<Client[]> {
    return this.http.get(environment.apiURL + '/users', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client[]));
  }

  public editUser(pUser: Client): Observable<Client> {
    return this.http.patch(environment.apiURL + '/users/', { client: pUser }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client));
  }

  public delUser(vuid: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + '/users/' + vuid, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }

}
