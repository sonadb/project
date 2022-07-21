import { Component, OnInit } from '@angular/core';
import {CartServiceService } from '../../Services/cart-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number=0;
  public searchItem:string='';
  constructor (public cartService: CartServiceService ,private router :Router) {

  }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })

  }

  search(event:any){
    this.router.navigate([''])
    this.searchItem=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);
  }
  filter(event:any){
   this.router.navigate(['our-specials'])
   this.cartService.category.next(event);
  }

  }

