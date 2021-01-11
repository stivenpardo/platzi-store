import { IProduct } from '../../IProduct.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product!: IProduct;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCar(){
    console.log('Añadir al carrito')
    this.productClicked.emit(this.product.id);
  }

}
