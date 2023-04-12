import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
baseurl=environment.baseurl
question=environment.question
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


}
