import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connector } from '../model/connector';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ResponseData } from '../model/responsedata';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private _ENDPOINT = 'connectors';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  public getAll(): Observable<Connector[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Connector[]));
  }
}
