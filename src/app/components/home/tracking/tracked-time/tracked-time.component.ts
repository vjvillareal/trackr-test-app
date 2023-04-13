import { Component, OnInit } from '@angular/core';
import { TrackedTimeService } from 'src/app/services/tracked-time.service';

@Component({
  selector: 'app-tracked-time',
  templateUrl: './tracked-time.component.html',
  styleUrls: ['./tracked-time.component.scss']
})
export class TrackedTimeComponent implements OnInit {

  records: any;

  constructor(
    private _trackedTimeService: TrackedTimeService 
  ) { }

  ngOnInit(): void {
    this.records = this._trackedTimeService.getFromLocalStorage();
    console.log(this.records)
  }

}
