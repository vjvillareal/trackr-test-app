import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracked-time-by-day',
  templateUrl: './tracked-time-by-day.component.html',
  styleUrls: ['./tracked-time-by-day.component.scss']
})
export class TrackedTimeByDayComponent implements OnInit {
  @Input() timeRecord: any;

  constructor() { }

  ngOnInit(): void {
  }

}
