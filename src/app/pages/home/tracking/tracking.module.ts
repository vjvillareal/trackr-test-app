import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking.component';
import { TimeTrackerComponent } from 'src/app/components/home/tracking/time-tracker/time-tracker.component';
import { TrackedTimeComponent } from 'src/app/components/home/tracking/tracked-time/tracked-time.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent
  ]
})
export class TrackingModule { }
