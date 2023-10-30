import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './user/list-user-component/list-user-component.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"users", loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"products", loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  {path:"providers", loadChildren:()=>import('./provider/provider.module').then(m=>m.ProviderModule)},
  {path:"home", component:HomeComponent},
  
  {path:"mainInvoice", component: MainInvoiceComponentComponent},
  {path:"Invoice/:id/:status", component: InvoiceComponentComponent},
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
