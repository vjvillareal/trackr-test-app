import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent implements OnInit {
  @Input() projectRecords: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.projectRecords)
  }

}
