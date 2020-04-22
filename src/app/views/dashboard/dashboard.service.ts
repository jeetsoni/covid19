import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Total } from '../../Class/total.class';
import { State } from '../../Class/state.class';
import { District } from '../../Class/district.class';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getTotalData()
  {
    return this.http.get<Total>('https://api.covid19india.org/data.json');
  }
  getState()
  {
    return this.http.get<State>('https://api.covid19india.org/data.json');
  }
  getDistrict()
  {
    return this.http.get<District>('https://api.covid19india.org/v2/state_district_wise.json');
  }

}
