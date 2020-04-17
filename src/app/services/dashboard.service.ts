import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../model/client';
import { ResponseData } from '../model/responsedata';
import { map } from 'rxjs/operators';
import { Charger } from '../model/charger';
import { Condominium } from '../model/condominium';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _ENDPOINT = 'dashboard';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  public getData(): Observable<Condominium> {
    return this.http.get(environment.apiURL + this._ENDPOINT, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Condominium));
  }

  public getUsers(): Observable<Client[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT + '/users', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Client[]));
  }

  public getChargers(): Observable<Charger[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT + '/chargers', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger[]));
  }

  public getConsum(): Observable<any[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT + '/consum', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data));
  }

  public getUserHistory(user: string): Observable<any[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT +
      '/users/' + user + '/history', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data));
  }
}
