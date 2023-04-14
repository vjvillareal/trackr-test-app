import { Component, Input, OnInit } from '@angular/core';
import { TrackedTimeService } from 'src/app/services/tracked-time.service';

@Component({
  selector: 'app-individual-project',
  templateUrl: './individual-project.component.html',
  styleUrls: ['./individual-project.component.scss']
})
export class IndividualProjectComponent implements OnInit {
  @Input() project: any;
  thisWeekProject: any;
  totalWeekDuration: string = "00:00:00";
  totalDuration: string = "00:00:00";

  constructor(
    private _trackedTimeService: TrackedTimeService
  ) { }

  ngOnInit(): void {
    let records = this.project[1];
    let totalDuration = records.reduce((sum: any, rec: any) => {
      return sum + rec['durationInSec']
    }, 0);
    this.totalDuration = new Date(1000 * totalDuration).toISOString().substring(11, 19);
    let thisWeekByProject = this._trackedTimeService.getThisWeekByProject().filter((proj: any) => {
      return proj[0] == this.project[0];
    });
    this.thisWeekProject = thisWeekByProject[0];
    let totalDurationThisWeek = this.thisWeekProject[1].reduce((sum: any, rec: any) => {
      return sum + rec['durationInSec']
    }, 0);
    this.totalWeekDuration = new Date(1000 * totalDuration).toISOString().substring(11, 19);
  }

}
