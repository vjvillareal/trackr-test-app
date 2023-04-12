import { Component, OnInit } from '@angular/core';
import { TimeTrackerService } from 'src/app/services/time-tracker.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
  start: boolean = true;
  stop: boolean = false;

  currentTime: string = "00:00:00";

  constructor(
    public _timeTrackerService: TimeTrackerService
  ) { }

  ngOnInit(): void {
  }

  startTimer() {
    this.toggleStartStop();
    this._timeTrackerService.startCounter();
  }

  stopTimer() {
    this.toggleStartStop();
    this._timeTrackerService.stopCounter();
  }

  toggleStartStop() {
    this.start = !this.start;
    this.stop = !this.stop;
  }

}
