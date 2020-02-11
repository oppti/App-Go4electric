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

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return {
      'x-access-token': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }
  public getVehicles(): Observable<Vehicle[]> {
    return this.http.get(environment.apiURL + '/vehicles', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Vehicle[]));
  }
}