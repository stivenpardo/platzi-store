import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
