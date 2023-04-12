import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
baseurl=environment.baseurl
question=environment.question
answer=environment.answer
  constructor(private http:HttpClient) { }

  postQuestion(body:any){
    try {
      return this.http.post(this.baseurl + this.question , body);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  }

  getQuestions(){
    try {
      return this.http.get(this.baseurl + this.question);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  }

  getAnswer(id:any){
    try {
      return this.http.get(this.baseurl + this.question +  id + this.answer);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
  }

  

  postAnswer(Id: number,data:any){
    try {
      return this.http.get(this.baseurl+this.question+"/"+Id).pipe(
        mergeMap((customer: any) => {
          const currentItemArray = customer.answers || []; // add a check for undefined
          currentItemArray.push(data);
  
          return this.http.patch(this.baseurl+this.question+"/"+Id, {
            answers: currentItemArray
          });
        })
      );
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
  

}
