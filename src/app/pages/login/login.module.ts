import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from 'src/app/components/login/login-form/login-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
