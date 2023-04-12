import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])
    
    });

    get username(){
      return this.login.get('username')
    }
  
    get password(){
      return this.login.get('password')
    }

    onSave(data:any){

    }
}
