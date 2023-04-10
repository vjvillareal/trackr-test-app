import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from 'src/app/components/register/register-form/register-form.component';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    RegisterComponent,
    RegisterFormComponent,
  ]
})
export class RegisterModule { }
