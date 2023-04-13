import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracked-time-by-day',
  templateUrl: './tracked-time-by-day.component.html',
  styleUrls: ['./tracked-time-by-day.component.scss']
})
export class TrackedTimeByDayComponent implements OnInit {
  @Input() timeRecord: any;
  totalDuration: string = "";

  constructor() { }

  ngOnInit(): void {
    this.timeRecord[1].reverse();
    let records = this.timeRecord[1];
    let totalDuration = records.reduce((sum: any, rec: any) => {
      return sum + rec['durationInSec']
    }, 0);
    this.totalDuration = new Date(1000 * totalDuration).toISOString().substring(11, 19);
  }

}
