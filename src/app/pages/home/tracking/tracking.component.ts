import { Component, OnInit } from '@angular/core';
import { TrackedTimeService } from 'src/app/services/tracked-time.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  records: any = [];
  totalWeekDuration: string = "";

  constructor(
    private _trackedTimeService: TrackedTimeService
  ) { }

  ngOnInit(): void {
    this.records = this._trackedTimeService.getRecordThisWeek();
    let totalDuration = this.records.reduce((sum: any, rec: any) => {
      return sum + rec['durationInSec']
    }, 0);
    this.totalWeekDuration = new Date(1000 * totalDuration).toISOString().substring(11, 19);
  }

}
