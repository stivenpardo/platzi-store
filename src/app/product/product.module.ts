import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { ProductRoutingModule } from "./product-routing.module";

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from "./components/product/product.component";
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from "../core/core.module";
@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsComponent,
    ProductComponent,
  ],
  exports:[
    ProductDetailComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProductRoutingModule,
    RouterModule,
  ]
})
export class ProductModule { }
