import { Component, OnInit } from '@angular/core';
import { Signup } from '../model/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  signup:Signup ={} as Signup;

  message:string="";
  constructor(private http:HttpClient,private router: Router) {
  }
 

  public authUser() : void {
    
     let result : Observable<any> = this.http.post<any>("http://localhost:333/v1/user/login",this.signup);
      result.subscribe(data=>{
        console.log(data);
             this.router.navigate(['/signups']);
     },(err) => {
      console.log(err.status);
      this.message="Sorry username and password are not correct";
    });
     
  }
}
