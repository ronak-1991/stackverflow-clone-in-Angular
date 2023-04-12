import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registration = new FormGroup({
    username:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    
    });

    get username(){
      return this.registration.get('username')
    }
    get name(){
      return this.registration.get('name')
    }
    get email(){
      return this.registration.get('email')
    }
    get password(){
      return this.registration.get('password')
    }
   
   

    onSave(address:any){
    
    }
}
