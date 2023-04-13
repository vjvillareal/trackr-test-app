import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-flag',
  templateUrl: './project-flag.component.html',
  styleUrls: ['./project-flag.component.scss']
})
export class ProjectFlagComponent implements OnInit {
  @Input() task: any;

  constructor() { }

  ngOnInit(): void {
  }

}
