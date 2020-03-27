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
  public getChargers(): Observable<Charger[]> {
    return this.http.get(environment.apiURL + 'chargers', { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger[]));
  }

  public addCharger(iot: Charger): Observable<Charger> {
    return this.http.post(environment.apiURL + 'chargers/add', { charger: iot }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger));
  }

  public editCharger(iot: Charger): Observable<Charger> {
    return this.http.patch(environment.apiURL + 'chargers/' + iot.uid, { charger: iot }, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as Charger));
  }

  public delCharger(cuid: string): Observable<boolean> {
    return this.http.delete(environment.apiURL + 'chargers/' + cuid, { headers: this.getHeaders() })
      .pipe(map((response: ResponseData) => response.data as boolean));
  }

}
