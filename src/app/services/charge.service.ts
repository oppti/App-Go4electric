import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from '../model/responsedata';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChargePoints } from '../model/charge-points';

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
  public getCharges(): Observable<ChargePoints[]> {
    return this.http.get(environment.apiURL + '/chargers', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as ChargePoints[]));
  }

  public addCharges(pVehicle: ChargePoints): Observable<ChargePoints> {
    return this.http.post(environment.apiURL + '/chargers/add', { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as ChargePoints));
  }

  public editCharges(pVehicle: ChargePoints): Observable<ChargePoints> {
    return this.http.patch(environment.apiURL + '/chargers', { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as ChargePoints));
  }

  public delCharges(vuid: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + '/chargers' + vuid, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }

}
