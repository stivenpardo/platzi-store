import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BannerComponent } from './components/banner/banner.component'
import { HomeComponent } from './components/home/home.component'
import { HomeRoutingModel } from "./home-routing.model";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations:[
    BannerComponent,
    HomeComponent,
  ],
  imports:[
    HomeRoutingModel,
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule {}
