import { IProduct } from '../../../core/models/IProduct.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from "../../../core/services/cart.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(
    private cartService : CartService,
  ){

  }

  addCart(){
    this.cartService.addCart(this.product)
  }

}
