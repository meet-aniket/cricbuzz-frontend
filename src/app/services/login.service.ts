import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login()
  {
    this.http.post<any>(`http://localhost:8000/admin`,null);
    return this.http.get<any>(`http://localhost:8000/admin`);
  }
  public setUser(user: any) 
  {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }
  public getUser() 
  {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }
  public logout() 
  {
    localStorage.removeItem('user');
    return true;
  }
  public isLoginIn() 
  {
    let user = localStorage.getItem('user');
    if (user == undefined || user == null || user == '') {
      return false;
    }
    return true;
  }
}
