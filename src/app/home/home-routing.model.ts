import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ProgressComponent } from "./components/progress/progress.component";

const ROUTES: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'progress',
    component: ProgressComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES),],
  exports:[RouterModule,]
})
export class HomeRoutingModel { }
