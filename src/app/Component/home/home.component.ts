import { Component, OnInit } from '@angular/core';
import { Productd } from '../../Interface/productd';
import { ProductServiceService  } from '../../Services/product-service.service';
import { CartServiceService} from '../../Services/cart-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:Productd[]=[];


  constructor(private order:ProductServiceService, private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.order.getData().subscribe((data:Productd[])=>
    {

      console.log(data);
      this.result=data;


      //for cart
      this.result.forEach((a:Productd)=>{
        Object.assign(a,{quantity:1,total:a.productPrice})
      })

    });
  }
  addtocart(dt:any){
    this.cartService.addtoCart(dt);
  }




}
