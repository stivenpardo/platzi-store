import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../IProduct.model';
import { ProductsService } from '../../../core/services/products/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] ;
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
