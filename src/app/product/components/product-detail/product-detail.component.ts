import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/IProduct.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-prduct-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }
 // ngOnit para recibir datos
  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      let idProduct : string = params.id;
      //this.product = this.productService.getProduct(idProduct);
      this.fetchProduct(idProduct);
      console.log(this.product)
    })
  }

  fetchProduct(id:any){
    this.productService.getProduct(id)
    .subscribe(product =>{
      this.product = product
    });
  }

  createProduct() {
    const NEWPRODUCT: IProduct = {
      id: 'smarth',
      title: 'smarth Platzi',
      image: '',
      price: 400.000,
      description:'Este es el que usted necesita para aprender',
    }
    this.productService.createProduct(NEWPRODUCT)
    .subscribe();
  }


}
