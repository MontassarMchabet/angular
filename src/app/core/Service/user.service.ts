import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable()
export class UserService {
 
  


   URL="http://localhost:3000/users";
  constructor(private http:HttpClient ) { }
  getAllusers(){
    return this.http.get<User[]>(this.URL);
  }
  getUserById(id:number){

  }
  addusers(){
    
  }



}
