import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from '../model/responsedata';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Charger } from '../model/charger';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }
  public getCharges(): Observable<Charger[]> {
    return this.http.get(environment.apiURL + 'chargers', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger[]));
  }

  public addCharges(pVehicle: Charger): Observable<Charger> {
    return this.http.post(environment.apiURL + '/chargers/add', { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger));
  }

  public editCharges(pVehicle: Charger): Observable<Charger> {
    return this.http.patch(environment.apiURL + '/chargers', { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger));
  }

  public delCharges(vuid: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + '/chargers' + vuid, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }

}
