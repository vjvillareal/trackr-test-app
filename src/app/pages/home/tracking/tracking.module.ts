import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking.component';
import { TimeTrackerComponent } from 'src/app/components/home/tracking/time-tracker/time-tracker.component';
import { TrackedTimeComponent } from 'src/app/components/home/tracking/tracked-time/tracked-time.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TrackedTimeByDayComponent } from 'src/app/components/home/tracking/tracked-time-by-day/tracked-time-by-day.component';
import { ProjectFlagComponent } from 'src/app/components/generic/project-flag/project-flag.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent,
    TrackedTimeByDayComponent,
    ProjectFlagComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipesModule
  ],
  exports: [
    TrackingComponent,
    TimeTrackerComponent,
    TrackedTimeComponent,
    TrackedTimeByDayComponent,
    ProjectFlagComponent
  ]
})
export class TrackingModule { }
