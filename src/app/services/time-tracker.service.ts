import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {

  timerInterval: any;
  seconds: number = 0;
  currentlyTracking: string = "00:00:00";

  constructor() { }

  startCounter(): Date {
    this.timerInterval = setInterval(() => {
      this.seconds++;
      this.timeFormatter(this.seconds);
    }, 1000);
    return new Date();
  }

  getDuration(): number {
    return this.seconds;
  }

  stopCounter(): Date {
    clearInterval(this.timerInterval);
    this.seconds = 0;
    this.timeFormatter(this.seconds);
    return new Date();
  }

  timeFormatter(sec: number): void {
    let hr = 0
    let min = 0;
    while(sec >= 3600) {
      sec -= 3600;
      hr++;
    }
    while(sec >= 60) {
      sec -= 60;
      min++;
    }
    this.currentlyTracking = (hr < 10 ? `0${hr}` : hr) + ":" + (min < 10 ? `0${min}` : min) + ":" + (sec < 10 ? `0${sec}` : sec);
  }
}
