import { Injectable } from '@angular/core';
import { Productd } from '../Interface/productd';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  public cartItemList:Productd[]=[]
  public productList=new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>("");
  http:any;

  constructor() { }

  getProducts()
  {
    return this.productList.asObservable();
  }


  setProducts(product :any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }


  getTotalPrice(): number
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=(a.productPrice*a.quantity);
    })
    return grandTotal;
  }


  removeCartItem(product: Productd){
    for(let i=0;i<this.cartItemList.length;i++){

    if(this.cartItemList[i].productId === product.productId){

    this.cartItemList.splice(i,1);

    }

  }
}



  removeAllCart()
  {
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }


}
