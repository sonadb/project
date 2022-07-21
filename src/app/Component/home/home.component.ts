import { Component, OnInit } from '@angular/core';
import { Productd } from '../../Interface/productd';
import { ProductServiceService  } from '../../Services/product-service.service';
import { CartServiceService} from '../../Services/cart-service.service';
import { Data } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:Productd[]=[];
  searchKey:string='';
  filterKey:string='productName';
  public filterCategory:boolean=false;

  constructor(private order:ProductServiceService, private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.order.getData().subscribe((data)=>
    {
      for(var i=0;i<data.length;i++)
      {
        let item :Productd={
          productId:data[i].productId,
productName:data[i].productName,
productPrice:data[i].productPrice,
productDiscription:data[i].productDiscription,
ProductQuantity:data[i]. ProductQuantity,
productImage:data[i].productImage,
productImage1:data[i].productImage1,
productImage2:data[i].productImage2,
productImage3:data[i].productImage3,
productCategory:data[i].productCategory,
tags:data[i].tags



      };
      this.result.push(item);
      this.searchKey='';
      this.filterKey='category';
    }

    });

    this.cartService.search.subscribe((val:string)=>{
      this.searchKey=val;
     this.filterKey='productName';
    })
    this.cartService.category.subscribe((val:string)=>{
     this.searchKey=val;
     this.filterKey='productName';
    })
  }
  addtocart(dt:Productd){
    this.cartService.addtoCart(dt);
  }







}
