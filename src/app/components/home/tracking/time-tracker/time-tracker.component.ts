import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
  start: boolean = true;
  stop: boolean = false;

  startTime: any;
  stopTime: any;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.toggleStartStop();
    this.startTime = new Date();
    // const current_datetime = new Date();
    // const amOrPm = current_datetime.getHours() >= 12 ? "PM" : "AM";
    // console.log(current_datetime.getHours() + amOrPm)
    // console.log(current_datetime.getMinutes())
    // console.log(current_datetime.getSeconds())
    var time = new Date();
    console.log(
      time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    );
  }

  stopTimer() {
    this.toggleStartStop();
    this.stopTime = new Date();
    this.countTime();
    var time = new Date();
    console.log(
      time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    );
  }

  toggleStartStop() {
    this.start = !this.start;
    this.stop = !this.stop;
  }

  countTime() {
    console.log(this.stopTime.getTime() - this.startTime.getTime())
    // console.log(new Date(this.stopTime - this.startTime).getTime())
  }

}
