import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";
import { NavComponent } from './components/nav/nav.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductTableComponent,
    ProductDashboardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ]
})
export class AdminModule { }
