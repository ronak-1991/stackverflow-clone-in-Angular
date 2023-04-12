import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionRoutingModule } from './question-routing.module';
import { AskQueComponent } from './ask-que/ask-que.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';


@NgModule({
  declarations: [
    AskQueComponent,
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
