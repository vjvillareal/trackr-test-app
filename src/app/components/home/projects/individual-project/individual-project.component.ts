import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-project',
  templateUrl: './individual-project.component.html',
  styleUrls: ['./individual-project.component.scss']
})
export class IndividualProjectComponent implements OnInit {
  @Input() project: any;
  totalDuration: string = "";

  constructor() { }

  ngOnInit(): void {
    let records = this.project[1];
    let totalDuration = records.reduce((sum: any, rec: any) => {
      return sum + rec['durationInSec']
    }, 0);
    this.totalDuration = new Date(1000 * totalDuration).toISOString().substring(11, 19);
  }

}
