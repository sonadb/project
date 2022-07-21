import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../Services/cart-service.service';
import { Productd } from '../../../Interface/productd';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;
  public totalItem: number=0;

  constructor(private cartService: CartServiceService,) { }

  ngOnInit(): void
  {

    this.cartService.getProducts().subscribe(res=>
    {
      this.product=res;
      this.totalItem=res.length;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:Productd)
  {
   this.cartService.removeCartItem(item)
  }

  emptycart()
  {
    this.cartService.removeAllCart();
  }

  inc(product_id:any,quantity:any,)
  {
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].productId===product_id){
        if(quantity!=5){
        this.product[i].quantity=parseInt(quantity)+1;
        }
      }
      this.grandTotal=this.cartService.getTotalPrice();
    }
  }

  dec(product_id:any,quantity:any)
  {
    for(let i =0; i<this.product.length;i++){
      if(this.product[i].productId===product_id){
        if(quantity!=1){
        this.product[i].quantity=parseInt(quantity)-1;
        }
      }
      this.grandTotal=this.cartService.getTotalPrice();
    }
  }




}
