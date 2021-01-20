import { IProduct } from '../../../models/IProduct.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../core/services/products/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : IProduct[] = [];
  displayedColumns: string[] = ['id','title','price','description','action'];
  constructor(
    private productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.deleteProduct
  }
  fetchAllProducts(){
     this.productService.getAllProducts()
    .subscribe(products =>{
      this.products = products;
      console.log(this.products)
    });
  };
  deleteProduct(id: any){
    let deleleteProduct = this.productService.deleteProduct(id)
    .subscribe(()=>{
      this.fetchAllProducts();
    }
    );
    return deleleteProduct;
  }

}
