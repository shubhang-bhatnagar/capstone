import { Injectable } from '@angular/core';
import { User } from '../Model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  private allUsers=new Map<string,User>();
  loginTheUser(user:User):boolean
  {
   if(this.allUsers.has(user.username))
     {
       if(this.allUsers.get(user.username)?.userpassword=== user.userpassword)
       {
         localStorage.setItem('token',JSON.stringify(user));
         return true;
      
       }
     } 
  return false;
   }
   isTokenStored():boolean{
     if(localStorage.getItem('token'))
       return true;
     return false;
   }

   SignuptheUser(user:User):boolean{
    if(!this.allUsers.has(user.username)){
      this.allUsers.set(user.username,user);
      return true;
    }
    return false;
 }
}
