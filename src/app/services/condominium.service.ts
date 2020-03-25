import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}