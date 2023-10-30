import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/Service/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private Router:Router, private userS:UserService){}

  add(F:NgForm){
    user:User={
      "idCustomer":7 ,
      "firstName": F.controls['fn'].value,
      "lastName": F.controls['ln'].value,
      "birthDate":F.controls['birthdate'].value,
      "accountCategory": F.controls['category'].value,
      "email":F.controls['email'].value,
      "password": F.controls['Password'].value,
      "picture": "https://bootdey.com/img/Content/avatar/avatar6.png",
      "profession":F.controls['Profession'].value
  };
  this.userS.addusers(this.user).subscribe(
    ()=>{alert('added seccesfully!!');
    this.Router.navigate(['listusers']);})
    
  }
}
