import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Raw } from '../../Class/Raw.class';
import { Recovery_Dath } from '../../Class/recovery_dath.class';
import { Total } from '../../Class/total.class';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getTotalData()
  {
    return this.http.get<Total>('https://api.covid19india.org/data.json');
  }
  getRawData()
  {
    return this.http.get<Raw>('https://api.covid19india.org/raw_data.json')
    
  }
  getRecovered()
  {
   return this.http.get<Recovery_Dath>('https://api.covid19india.org/deaths_recoveries.json');
  }

}
