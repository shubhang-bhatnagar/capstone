import { Component } from '@angular/core';
import { User } from '../Model/user';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private authservice: AuthserviceService, private router: Router) { }


  msg:string="";
  onLoginFormSubmit(userForm:NgForm)
  {
      let user:User={
        username: userForm.value.username,
        useremail: userForm.value.useremail,
        userpassword: userForm.value.userPassword
      }

      let response=this.authservice.loginTheUser(user);
      if(response){ this.router.navigate(['/dashboard']);}
      else{this.msg="PLEASE CHECK YOUR CREDENTIALS";}

      
  }

}

