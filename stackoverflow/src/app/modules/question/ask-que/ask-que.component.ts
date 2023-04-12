import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-ask-que',
  templateUrl: './ask-que.component.html',
  styleUrls: ['./ask-que.component.scss']
})
export class AskQueComponent {

constructor(private questionservice:QuestionService){}

  askquestion = new FormGroup({
    title:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required,Validators.minLength(20)]),
    tag:new FormControl("",[Validators.required])
    });


    get title(){
      return this.askquestion.get('title')
    }
  
    get description(){
      return this.askquestion.get('description')
    }

    get tag(){
      return this.askquestion.get('tag')
    }


    userDetails = localStorage.getItem('userDetails') as string;
    uname= JSON.parse(this.userDetails);

onSubmit(data:any){
  if(this.askquestion.valid){
  console.log(data)
  let body={
    userid:this.uname.id,
    title:data.title,
    description:data.description,
    tag:data.tag,
    votes:0,
    view:0,
    answer:[]
  }
this.questionservice.postQuestion(body).subscribe(res=>{

})

}
}

  }
