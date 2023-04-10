import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

let ngMaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngMaterialComponents
  ],
  exports: [
    ...ngMaterialComponents
  ]
})
export class AngularMaterialModule { }
