import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../core/services/cart.service";
import { IProduct } from "../../../core/models/IProduct.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$ : Observable<IProduct[]>;
  constructor(
    private cartService : CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
