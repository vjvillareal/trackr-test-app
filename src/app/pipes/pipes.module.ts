import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanProjectFlagLabelPipe } from './clean-project-flag-label.pipe';

const pipes = [
  CleanProjectFlagLabelPipe
]

@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...pipes
  ]
})
export class PipesModule { }
