import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products : IProduct[] = [];
  private cart = new BehaviorSubject<IProduct[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product : IProduct){
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
