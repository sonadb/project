import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Productd } from '../Interface/productd';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public url='http://localhost:5000/api';

  constructor(private http:HttpClient) { }

  getData():Observable<Productd[]>{
    return this.http.get<Productd[]>("http://localhost:5000/api/Products");
  }
  getSingleProduct(product_id: Number): Observable<Productd> {
    return this.http.get<Productd>(this.url + '/Products/' + product_id);
    }

    // getProductsFromCategory(title: String): Observable<Productd[]> {
    //   return this.http.get<Productd[]>(this.url + '/Products/category' + title);
    // }

    addProduct(val:any){
      return this.http.post(this.url+'/Products/',val)
    }

    UpdateProduct(val:any){
      return this.http.put(this.url+'/Products',val)
    }

    deleteProduct(val:any){
      return this.http.delete(this.url+'/Products/'+val)
    }


        // addAddress(val:any){
        //   return this.http.post(this.url+'/BillingDetails',val)
        // }



}
