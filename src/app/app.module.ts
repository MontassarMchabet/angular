import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponentComponent } from './user/list-user-component/list-user-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { UserLComponent } from './user-l/user-l.component';
import { FooterComponent } from './footer/footer.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ProviderModule } from './provider/provider.module';
import { UserService } from './core/Service/user.service';


@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    SlideComponent,
    UserLComponent,
    FooterComponent,
    MyDirectiveDirective,
    HomeComponent,
    ErrorpageComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    ProductModule,
    ProviderModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
