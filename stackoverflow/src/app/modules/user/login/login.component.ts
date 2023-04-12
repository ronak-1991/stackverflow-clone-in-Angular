import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userdetails:any
constructor(private authservice:AuthService, private router:Router){}

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

    onSave(data: any) {
      if (this.login.valid) {
        this.authservice.getUserData().subscribe(res => {
          //console.log(res);
          this.userdetails = res;
          if (this.userdetails && this.userdetails.find((ele: any) => ele.username === data.username && ele.password === data.password)) {
            console.log("done");
          let userDetails=this.userdetails.find((ele: any) => ele.username === data.username && ele.password === data.password)
          console.log(userDetails);
          
            localStorage.setItem('userDetails',JSON.stringify(userDetails));
           
           

        this.router.navigate(['']);

          }
        });
      }
    }
    
}
