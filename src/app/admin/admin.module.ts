import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from "../material/material.module";
import { NavComponent } from './components/nav/nav.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CoreModule } from "../core/core.module";
import { FormProductComponent } from './components/form-product/form-product.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductTableComponent,
    ProductDashboardComponent,
    ProductListComponent,
    FormProductComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
