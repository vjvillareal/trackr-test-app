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

  durationInSeconds: number = 0;
  startTime: any;
  stopTime: any;
  trackedTasks: any = [];

  constructor(
    public _timeTrackerService: TimeTrackerService
  ) { }

  ngOnInit(): void {
  }

  toggleStartStop() {
    this.start = !this.start;
    this.stop = !this.stop;
  }

  startTimer() {
    this.toggleStartStop();
    this.startTime = this._timeTrackerService.startCounter();
    console.log(this.startTime)
  }

  stopTimer() {
    this.toggleStartStop();
    this.durationInSeconds = this._timeTrackerService.getDuration();
    this.stopTime = this._timeTrackerService.stopCounter();
    var durationDisplay = new Date(1000 * this.durationInSeconds).toISOString().substring(11, 19);
    this.addNewTime(this.startTime, this.stopTime, this.startTime.toLocaleDateString("en-US"), durationDisplay, this.durationInSeconds)
  }

  addNewTime(startDate: any, stopDate: any, date: any, durationDisplay: any, durationInSec: any) {
    console.log(startDate.getHours(), startDate.getMinutes())
    let trackedObj = {
      "startDateObj": startDate,
      "stopDateObj": stopDate,
      "startDateDisplay": `${startDate.getHours()}:${startDate.getMinutes()} ` + ((startDate.getHours() >= 12) ? "PM" : "AM"),
      "stopDateDisplay": `${stopDate.getHours()}:${stopDate.getMinutes()} ` + ((stopDate.getHours() >= 12) ? "PM" : "AM"),
      "date": date,
      "durationDisplay": durationDisplay,
      "durationInSec": durationInSec
    };
    this.trackedTasks.push(trackedObj)
    console.log(trackedObj)
    console.log(this.trackedTasks)
  }
}
