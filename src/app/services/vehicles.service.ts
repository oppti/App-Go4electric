import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Client } from '../model/client';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ResponseData } from '../model/responsedata';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  private _ENDPOINT = 'vehicles';


  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }
  public getVehicles(): Observable<Vehicle[]> {
    return this.http.get(environment.apiURL + this._ENDPOINT, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Vehicle[]));
  }

  public addVehicle(pVehicle: Vehicle): Observable<Vehicle> {
    return this.http.post(environment.apiURL + this._ENDPOINT + '/new', { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Vehicle));
  }

  public editVehicle(pVehicle: Vehicle): Observable<Vehicle> {
    return this.http.patch(environment.apiURL + this._ENDPOINT + '/' + pVehicle.uid, { vehicle: pVehicle }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Vehicle));
  }

  public delVehicle(vuid: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + this._ENDPOINT + '/' + vuid, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }

}
