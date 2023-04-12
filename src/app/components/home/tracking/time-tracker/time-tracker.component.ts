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
  
  hrs: string = "00";
  mins: string = "00";
  sec: string = "00";

  intervalTimer: any;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.toggleStartStop();
    this.startTime = new Date();
    
    let hr = 0;
    let min = 0;
    let sec = 0;
    this.intervalTimer = setInterval(() => {
      sec++;
      if(sec < 10) {
        this.sec = "0" + sec.toString();
      } else if(sec >= 60) {
        sec = 0;
        min++;
        if(min < 10) {
          this.mins = 0 + min.toString();
        } else if(min >= 60) {
          min = 0;
          this.mins = 0 + min.toString();
        } else {
          this.mins = min.toString();
        }
        this.sec = "0" + sec.toString();
      } else {
        this.sec = sec.toString();
      }
      
    }, 1000)
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
    this.sec = "00";
    this.countTime();
    var time = new Date();
    console.log(
      time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    );
    clearInterval(this.intervalTimer);
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
