import { Component } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
allQuestion:any
  constructor(private questionservice:QuestionService){}

  ngOnInit(){
    this.getAllQuestion()
  }

  getAllQuestion(){
    this.questionservice.getQuestions().subscribe(res=>{
      console.log(res)
      this.allQuestion=res;
    })
  }

}
