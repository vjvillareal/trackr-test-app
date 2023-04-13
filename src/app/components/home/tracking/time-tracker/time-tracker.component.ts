import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeTrackerService } from 'src/app/services/time-tracker.service';
import { TrackedTimeService } from 'src/app/services/tracked-time.service';

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

  taskForm = this._formBuilder.group({
    taskName: ['', Validators.required],
    project: ['', Validators.required]
  });

  constructor(
    public _timeTrackerService: TimeTrackerService,
    private _trackedTimeService: TrackedTimeService,
    private _formBuilder: FormBuilder
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
  }

  stopTimer() {
    this.toggleStartStop();
    this.durationInSeconds = this._timeTrackerService.getDuration();
    this.stopTime = this._timeTrackerService.stopCounter();
    var durationDisplay = new Date(1000 * this.durationInSeconds).toISOString().substring(11, 19);
    this.addNewTime(this.startTime, this.stopTime, this.startTime.toLocaleDateString("en-US"), durationDisplay, this.durationInSeconds, this.taskForm.controls['taskName'].value!);
    this.clearAllValues();
  }

  addNewTime(startDate: any, stopDate: any, date: any, durationDisplay: any, durationInSec: any, taskName: string) {
    let trackedObj = {
      "startDateObj": startDate,
      "stopDateObj": stopDate,
      "startDateDisplay": `${startDate.getHours()}:${startDate.getMinutes()} ` + ((startDate.getHours() >= 12) ? "PM" : "AM"),
      "stopDateDisplay": `${stopDate.getHours()}:${stopDate.getMinutes()} ` + ((stopDate.getHours() >= 12) ? "PM" : "AM"),
      "date": date,
      "durationDisplay": durationDisplay,
      "durationInSec": durationInSec,
      "taskName": taskName
    };
    this.trackedTasks.push(trackedObj)
    this._trackedTimeService.storeToLocalStorage(this.trackedTasks)
  }

  clearAllValues() {
    this.durationInSeconds = 0;
    this.startTime = null;
    this.stopTime = null;
    this.taskForm.patchValue({ taskName: "" })
  }
}
