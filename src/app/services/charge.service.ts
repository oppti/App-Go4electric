import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from '../model/responsedata';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  // public getCharges(): Observable<Charge[]> {
  //   return this.http.get(environment.apiURL + '/charges', { headers: this.getHeaders() })
  //     .pipe(map((response: ResponseData) => response.data as Charge[]));
  // }

  // public addCharges(pVehicle: Charge): Observable<Charge> {
  //   return this.http.post(environment.apiURL + '/charges/add', { vehicle: pVehicle }, { headers: this.getHeaders() })
  //     .pipe(map((response: ResponseData) => response.data as Charge));
  // }

  // public editCharges(pVehicle: Charge): Observable<Charge> {
  //   return this.http.patch(environment.apiURL + '/charges', { vehicle: pVehicle }, { headers: this.getHeaders() })
  //     .pipe(map((response: ResponseData) => response.data as Charge));
  // }

  // public delCharges(vuid: string): Observable<boolean> {
  //   return this.http.delete(environment.apiURL + '/charges' + vuid, { headers: this.getHeaders() })
  //     .pipe(map((response: ResponseData) => response.data as boolean));
  // }

}
