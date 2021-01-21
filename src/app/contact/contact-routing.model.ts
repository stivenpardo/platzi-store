import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from "./components/contact/contact.component";
import { AdminGuard } from "../admin.guard"

const ROUTES: Routes = [
  {
    path:'',
    component: ContactComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES),],
  exports:[RouterModule,]
})
export class ContactRoutingModel { }
