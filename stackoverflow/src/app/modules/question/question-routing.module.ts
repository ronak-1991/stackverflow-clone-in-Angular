import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQueComponent } from './ask-que/ask-que.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

const routes: Routes = [
  {path:"askQuestion",component:AskQueComponent},
  {path:"question-details/:id",component:QuestionDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
