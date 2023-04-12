import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

constructor(private authservice:AuthService){}

  registration = new FormGroup({
    username:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]),
    
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
   
   

    onSave(registration:any){        
        if(this.registration.valid){
        this.authservice.postregistrationData(registration).subscribe((res:any)=>{
          console.log(res)
      
      })
    }
        
}

}