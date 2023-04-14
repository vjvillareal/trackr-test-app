import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  manualTime: boolean = false;
  autoTime: boolean = true;

  taskForm = this._formBuilder.group({
    taskName: ['', Validators.required],
    project: ['', Validators.required]
  });

  manualTimeForm = this._formBuilder.group({
    startTimeManual: ['', Validators.required],
    stopTimeManual: ['', Validators.required]
  });

  projects: any = [
    { value: 'no-project', viewValue: 'No Project', color: "no-color" },
    { value: 'project-synergy', viewValue: 'Project Synergy', color: "#d6e6ff" },
    { value: 'project-mecha', viewValue: 'Project Mecha', color: "#fff8b4" },
    { value: 'celestial-interface', viewValue: 'Celestial Interface', color: "#d5ffb3" },
    { value: 'project-aurora', viewValue: 'Project Aurora', color: "#fce2c7" },
  ];

  hasProject: boolean = true;

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
    let durationDisplay = new Date(1000 * this.durationInSeconds).toISOString().substring(11, 19);
    let projectName = this.taskForm.controls['project'].value!;
    if(projectName === '') { projectName = "no-project"; }
    let foundProject = this.projects.find((proj: any) => {
      return proj['value'] == projectName;
    });
    this.addNewTime(this.startTime, this.stopTime, this.startTime.toLocaleDateString("en-US"), durationDisplay, this.durationInSeconds, this.taskForm.controls['taskName'].value!, projectName, foundProject['color']);
    this.clearAllValues();
    this._trackedTimeService.ifNewDataAdded.next(true);
  }

  addNewTime(startDate: any, stopDate: any, date: any, durationDisplay: any, durationInSec: any, taskName: string, project: string, color: string) {
    let startDispHrFormat = (startDate.getHours() % 12 || 12) < 10 ? '0' + (startDate.getHours() % 12 || 12) : (startDate.getHours() % 12 || 12) ;
    let startDispMinFormat = startDate.getMinutes() < 10 ? '0' + startDate.getMinutes() : startDate.getMinutes();

    let stopDispHrFormat = (stopDate.getHours() % 12 || 12) < 10 ? '0' + (stopDate.getHours() % 12 || 12) : (stopDate.getHours() % 12 || 12);
    let stopDispMinFormat = stopDate.getMinutes() < 10 ? '0' + stopDate.getMinutes() : stopDate.getMinutes();

    let trackedObj = {
      "startDateObj": startDate,
      "stopDateObj": stopDate,
      "startDateDisplay": `${startDispHrFormat}:${startDispMinFormat} ` + ((startDate.getHours() >= 12) ? "PM" : "AM"),
      "stopDateDisplay": `${stopDispHrFormat}:${stopDispMinFormat} ` + ((stopDate.getHours() >= 12) ? "PM" : "AM"),
      "date": date,
      "durationDisplay": durationDisplay,
      "durationInSec": durationInSec,
      "taskName": taskName,
      "project": project,
      "projectColor": color
    };
    this._trackedTimeService.storeToLocalStorage(trackedObj);
  }

  clearAllValues() {
    this.durationInSeconds = 0;
    this.startTime = null;
    this.stopTime = null;
    this.taskForm.patchValue({ taskName: "" });
    this.taskForm.patchValue({ project: "" });
    this.hasProject = true;
  }

  openSelect(selectRef: any) {
    selectRef.open();    
  }

  getProjectValue() {
    if(this.taskForm.controls['project'].value == 'no-project') {
      this.hasProject = true;
      this.taskForm.patchValue({ project: "" })
    } else { this.hasProject = false; }
  }

  toggleAutoTime() {
    this.manualTime = false;
    this.autoTime = true;
  }

  toggleManualTime() {
    this.manualTime = true;
    this.autoTime = false;
  }

  addManualTime() {
    let projectName = this.taskForm.controls['project'].value!;
    if(projectName === '') { projectName = "no-project"; }
    let foundProject = this.projects.find((proj: any) => {
      return proj['value'] == projectName;
    });

    // Get manual input (START time), then convert to 12-hr format
    let timeStart = this.manualTimeForm.controls['startTimeManual'].value;
    let timeStartSplit = timeStart!.split(":");
    let startDispHrFormat = (parseInt(timeStartSplit[0]) % 12 || 12) < 10 ? '0' + (parseInt(timeStartSplit[0]) % 12 || 12) : (parseInt(timeStartSplit[0]) % 12 || 12) ;
    let startDispMinFormat = parseInt(timeStartSplit[1]) < 10 ? '0' + parseInt(timeStartSplit[1]) : parseInt(timeStartSplit[1]);

    // Get manual input (STOP time), then convert to 12-hr format
    let timeStop = this.manualTimeForm.controls['stopTimeManual'].value;
    let timeStopSplit = timeStop!.split(":");
    let stopDispHrFormat = (parseInt(timeStopSplit[0]) % 12 || 12) < 10 ? '0' + (parseInt(timeStopSplit[0]) % 12 || 12) : (parseInt(timeStopSplit[0]) % 12 || 12) ;
    let stopDispMinFormat = parseInt(timeStopSplit[1]) < 10 ? '0' + parseInt(timeStopSplit[1]) : parseInt(timeStopSplit[1]);

    let secondsStart = new Date('1970-01-01T' + timeStart + 'Z').getTime() / 1000;
    let secondsStop = new Date('1970-01-01T' + timeStop + 'Z').getTime() / 1000;

    let manualTrackedObj = {
      "startDateObj": new Date(),
      "stopDateObj": new Date(),
      "startDateDisplay": `${startDispHrFormat}:${startDispMinFormat} ` + ((parseInt(timeStartSplit[0]) >= 12) ? "PM" : "AM"),
      "stopDateDisplay": `${stopDispHrFormat}:${stopDispMinFormat} ` + ((parseInt(timeStopSplit[0]) >= 12) ? "PM" : "AM"),
      "date": new Date().toLocaleDateString("en-US"),
      "durationDisplay": new Date(1000 * (secondsStop - secondsStart)).toISOString().substring(11, 19),
      "durationInSec": secondsStop - secondsStart,
      "taskName": this.taskForm.controls['taskName'].value!,
      "project": projectName,
      "projectColor": foundProject['color']
    };
    this.clearAllValuesManual();
    this._trackedTimeService.storeToLocalStorage(manualTrackedObj);
    this._trackedTimeService.ifNewDataAdded.next(true);
  }

  clearAllValuesManual() {
    this.taskForm.patchValue({ taskName: "", project: "" });
    this.manualTimeForm.patchValue({ startTimeManual: "", stopTimeManual: "" });
    this.hasProject = true;
  }
}
