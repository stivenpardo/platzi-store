import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./components/contact/contact.component";
import { ContactRoutingModel } from "./contact-routing.model";
import { SharedModule } from '../shared/shared.module'
@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModel,
    SharedModule,
  ],
  exports: [

  ]
})
export class ContactModule { }
