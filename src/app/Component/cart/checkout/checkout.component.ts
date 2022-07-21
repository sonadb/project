import { Component, OnInit } from '@angular/core';
import { Productd } from '../../../Interface/productd';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public product:any=[];
    public grandTotal!:number;
    public totalItem: number=0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })

  }

  removeItem(item:any){
this.cartService.removeCartItem(item)
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
