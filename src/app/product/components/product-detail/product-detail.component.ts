import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/app/IProduct.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  idProduct : string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }
 // ngOnit para recibir datos
  ngOnInit(): void {
    this.route.params.subscribe((params: Params): void => {
      this.idProduct = params.id;
      //this.product = this.productService.getProduct(idProduct);
      this.fetchProduct(this.idProduct);
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
      id: '33',
      title: 'Princesa Daiarand',
      image: '../assets/images/pin.png',
      price: 400.000,
      description:'Princesa arabe',
    }
    this.productService.createProduct(NEWPRODUCT)
    .subscribe();
  }
  updateProduct() {
    const CHANGEPRODUCT: Partial<IProduct> = {
      title: 'smarth Platzi',
      price: 400.000,
      description:'Este es el que usted necesita para aprender',
    }
    this.productService.updateProduct(this.idProduct, CHANGEPRODUCT)
    .subscribe();
  }
  deleteProduct() {
    this.productService.deleteProduct(this.idProduct)
    .subscribe();
  }

}
