import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
answer:any
constructor(private route: ActivatedRoute,private questionservice:QuestionService){
  this.route.paramMap.subscribe(params => {
    this.question_id = params.get('id');
  });
}

ngOnInit(){
  this.getAllQuestion()
}

answers = new FormGroup({
  ans:new FormControl("",[Validators.required,Validators.minLength(8)])
  });

  get ans(){
    return this.answers.get('ans')
  }

getAllQuestion(){
this.questionservice.getQuestions().subscribe((res:any)=>{
  if(res){
let questionDetails=res.find((ele: any) => ele.id == this.question_id)
this.question=questionDetails
console.log(questionDetails);

this.answer=this.question.answer
          console.log(this.answer);
  }

})
}

giveAns(data:any){
  if(this.answers.valid){
this.questionservice.postAnswer(this.question_id,data).subscribe(res=>{
console.log(res)
})
}
}

}
