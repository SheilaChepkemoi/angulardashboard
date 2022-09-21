import { Appusers } from './../appusers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginusers } from '../loginusers';


@Injectable({
  providedIn: 'root'
})
export class AppusersService {

  url='http://localhost:8090'
  login_url='http://localhost:8090'
 

  constructor(private http: HttpClient) { }

  public newUser(appuser: Appusers): Observable<Appusers> {
    return this.http.post<Appusers>(`${this.url}/api/auth/signup`, appuser);
  }
  // public getRegisteredUsers(): Observable<Appusers[]> {
  //   return this.http.get<Appusers[]>(`${this.url}/employee/all`);
  // }
  
  public login(loggedinuser:Loginusers): Observable<Loginusers> {
    return this.http.post<Loginusers>(`${this.login_url}/api/auth/signin`, loggedinuser);
  }
}
