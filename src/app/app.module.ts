import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';

import { AddToCartComponent } from './Component/cart/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './Component/cart/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ProductServiceService } from './Services/product-service.service';

import { LoginComponent } from './Component/Account/login/login.component';
import { SignupComponent } from './Component/Account/signup/signup.component';


import {FileUploadModule} from 'primeng/fileupload';
import { MessageService } from 'primeng/api';                           //img browse and upload
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AddToCartComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    AccordionModule,
    MessagesModule,
    MessageModule,

  ],
  providers: [
    ProductServiceService,
    MessageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
