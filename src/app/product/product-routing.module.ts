import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from './components/products/products.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const ROUTES: Routes = [
  {
    path:'',
    component: ProductsComponent
  },
  //TODO for working detail of products
  {
    path:':id',
    component: ProductDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports : [RouterModule,]

})
export class ProductRoutingModule { }
