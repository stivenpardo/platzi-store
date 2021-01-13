import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-prduct-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }
 // ngOnit para recibir datos
  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      let idProduct : string = params.id;
      this.product = this.productService.getProduct(idProduct);
      console.log(this.product)
    })
  }

}
