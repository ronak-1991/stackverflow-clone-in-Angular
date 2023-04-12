import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ifuname=false;
  username:any

  constructor(private router:Router){}

  ngOnInit(){
    
  
    this.router.events.subscribe((res:any)=>{
      if(res.url){
      this.checkUser();
      }
    })
  
  }

  checkUser(){
    let userDetails = localStorage.getItem('userDetails') as string;
    let uname= JSON.parse(userDetails);
    this.username=uname.username
    if (uname.username) {
      this.ifuname=true;
  }else{
    this.ifuname=false;
  }
}

logout() {
  localStorage.clear();
}
}
