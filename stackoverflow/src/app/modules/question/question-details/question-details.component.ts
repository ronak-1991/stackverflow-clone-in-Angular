import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent {
question_id:any
question:any
constructor(private route: ActivatedRoute,private questionservice:QuestionService){
  this.route.paramMap.subscribe(params => {
    this.question_id = params.get('id');
  });
}

ngOnInit(){
  this.getAllQuestion()
}

getAllQuestion(){
this.questionservice.getQuestions().subscribe(res=>{
  if(res){
this.question=res
let questionDetails=this.question.find((ele: any) => ele.id == this.question_id)
          console.log(questionDetails);
  }

})
}

}
