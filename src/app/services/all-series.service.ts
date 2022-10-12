import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllSeriesService {

  constructor(private http: HttpClient) { }

  allSeries()
  {
    return this.http.get(`https://api.cricapi.com/v1/series?apikey=5cd38dc8-d004-4251-a121-249e27785e4c&offset=0`);
  }
}
