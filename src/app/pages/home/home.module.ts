import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TrackingModule } from './tracking/tracking.module';
import { ProjectsModule } from './projects/projects.module';
import { MainNavComponent } from 'src/app/components/home/main-nav/main-nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    TrackingModule,
    ProjectsModule
  ],
  exports: [
    HomeComponent,
    MainNavComponent
  ]
})
export class HomeModule { }
