import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking.component';
import { TimeTrackerComponent } from 'src/app/components/home/tracking/time-tracker/time-tracker.component';
import { TrackedTimeComponent } from 'src/app/components/home/tracking/tracked-time/tracked-time.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TrackedTimeByDayComponent } from 'src/app/components/home/tracking/tracked-time-by-day/tracked-time-by-day.component';



@NgModule({
  declarations: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent,
    TrackedTimeByDayComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent,
    TrackedTimeByDayComponent
  ]
})
export class TrackingModule { }
