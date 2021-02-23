import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { BannerComponent } from './components/banner/banner.component'
import { ProgressComponent } from "./components/progress/progress.component";
import { MaterialModule } from "../material/material.module";

import { HomeComponent } from './components/home/home.component'
import { HomeRoutingModel } from "./home-routing.model";
@NgModule({
  declarations:[
    BannerComponent,
    HomeComponent,
    ProgressComponent,
  ],
  imports:[
    FormsModule,
    CommonModule,
    HomeRoutingModel,
    SharedModule,
    MaterialModule,
  ]
})
export class HomeModule {}
