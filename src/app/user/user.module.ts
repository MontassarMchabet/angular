import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../core/Service/user.service';


@NgModule({
  declarations: [
    ListUserComponentComponent,
    UpdateUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],

  })
  
export class UserModule { }
