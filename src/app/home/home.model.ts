import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HomeRoutingModel } from "./home-routing.model";
import { SharedModule } from "../shared/shared.module";
import { BannerComponent } from './components/banner/banner.component'
import { HomeComponent } from './components/home/home.component'
import { ProgressComponent } from "./components/progress/progress.component";
import { MaterialModule } from "../material/material.module";
@NgModule({
  declarations:[
    BannerComponent,
    HomeComponent,
    ProgressComponent,
  ],
  imports:[
    HomeRoutingModel,
    CommonModule,
    SharedModule,
    MaterialModule,
  ]
})
export class HomeModule {}
