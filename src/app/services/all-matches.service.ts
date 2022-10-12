import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllMatchesService {

  constructor(private http: HttpClient) { }

  allMatches()
  {
    return this.http.get(`https://api.cricapi.com/v1/matches?apikey=5cd38dc8-d004-4251-a121-249e27785e4c&offset=0`);
  }
  
}
