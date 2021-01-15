import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NavComponent } from './components/nav/nav.component'
import { ProductTableComponent } from "./components/product-table/product-table.component";
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component'
const routes: Routes = [
  {
    path:'',
    component: NavComponent,
    children:[
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path:'table',
        component: ProductTableComponent
      },
      {
        path:'dashBoard',
        component: ProductDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
