import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Component/Account/signup/signup.component';

import { AddToCartComponent } from './Component/cart/add-to-cart/add-to-cart.component';

import { CheckoutComponent } from './Component/cart/checkout/checkout.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
     path:''
    },
    {
    component: AddToCartComponent,
     path:'addtocart'

   },
   {
    component:CheckoutComponent,
    path:'checkout'
   },
   {
    component:SignupComponent,
    path:'signup'
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
