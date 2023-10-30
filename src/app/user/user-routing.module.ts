import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
 
  {path:"",component:ListUserComponentComponent},
  {path:"edituser/:param", component:UpdateUserComponent},
  {path:"adduser", component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
