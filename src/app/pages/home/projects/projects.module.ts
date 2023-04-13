import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectReportComponent } from 'src/app/components/home/projects/project-report/project-report.component';
import { IndividualProjectComponent } from 'src/app/components/home/projects/individual-project/individual-project.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectReportComponent,
    IndividualProjectComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ProjectsComponent,
    ProjectReportComponent,
    IndividualProjectComponent
  ]
})
export class ProjectsModule { }
