import { Component } from '@angular/core';
import {User} from '../../model/User'
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/Service/user.service';



@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})





export class ListUserComponentComponent {
  searchItem!:string;
  var1="submit";
  list:User[]=[];
  constructor(private Router:Router, private userS:UserService){}
  ngOnInit(){
    this.userS.getAllusers().subscribe(data => this.list=data);
  }
 


}
