import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllMatchesService {

  constructor(private http: HttpClient) { }

  allMatches()
  {
    return this.http.get(`https://api.cricapi.com/v1/matches?apikey=5cd38dc8-d004-4251-a121-249e27785e4c&offset=0`);
  }
  allCurrentMatches()
  {
    return this.http.get(`https://api.cricapi.com/v1/currentMatches?apikey=5cd38dc8-d004-4251-a121-249e27785e4c&offset=0`);
  }




  // httpOptions = 
  // {
  //   headers:new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'api_token':'CPzEb1HMrrk1aoND0K50D15oI9FzC7BMSIfUskroJfB8iOl60vYH8a8rI7QD',
  //   })
  // };


  // temp()
  // {
  //   return this.http.get("https://cricket.sportmonks.com/api/v2.0/players?api_token=CPzEb1HMrrk1aoND0K50D15oI9FzC7BMSIfUskroJfB8iOl60vYH8a8rI7QD",{headers:this.httpOptions.headers});
  // }
  
}
