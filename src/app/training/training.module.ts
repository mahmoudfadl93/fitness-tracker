import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingRoutingModule } from './training-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ContainerComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    MaterialModule
  ]
})
export class TrainingModule { }
