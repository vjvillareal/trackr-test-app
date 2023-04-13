import { Component, OnInit } from '@angular/core';
import { TimeTrackerService } from 'src/app/services/time-tracker.service';
import { TrackedTimeService } from 'src/app/services/tracked-time.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  records: any = [];

  constructor(
    private _trackedTimeService: TrackedTimeService
  ) { }

  ngOnInit(): void {
    this.records = this._trackedTimeService.getGroupedByProject();
  }

}
