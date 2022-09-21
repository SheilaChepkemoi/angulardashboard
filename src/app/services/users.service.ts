import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface user{
//   id: number,
//   name: string,
//   username: string,
//   email: string,
//   address: string

// }

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // public users() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }

  postUser(data:any){
    return this.http.post<any>('http://localhost:3000/users/', data);
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/users/');
  }
  updateUser(data:any, id: number){
    return this.http.put<any>('http://localhost:3000/users/'+id, data);
  }
  deleteUser(id:number){
    return this.http.delete<any>('http://localhost:3000/users/'+id);
  }
}
