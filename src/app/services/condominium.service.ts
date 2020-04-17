import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Condominium } from '../model/condominium';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../model/responsedata';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CondominiumService {
  private _ENDPOINT = 'condominiuns';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  public getAll(): Observable<Condominium[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Condominium[]));
  }

  public add(cond: Condominium): Observable<Condominium> {
    return this.http.post(environment.apiURL + this._ENDPOINT, { condo: cond }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Condominium));
  }

  public edit(cond: Condominium): Observable<Condominium> {
    return this.http.post(environment.apiURL + this._ENDPOINT + '/edit', { condo: cond }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Condominium));
  }

  public del(id: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + this._ENDPOINT + '/' + id, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }
}
