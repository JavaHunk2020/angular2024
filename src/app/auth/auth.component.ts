import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Signup } from '../model/signup.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  signup:Signup ={} as Signup;
  signups:Signup[] =[];
  
  constructor(private http:HttpClient) {
  }
 

  public sendData() : void {
    
     let result : Observable<any> = this.http.post<any>("http://localhost:333/v1/signup",this.signup);
     
     result.subscribe(data=>{
        this.signup.id = data.id;
        // Cloning the Object with JSON.parse() Method
         // let clonedInstance = JSON.parse(JSON.stringify(this.signup));
        this.signups.push(this.signup);
        this.signup={} as Signup;
     });
     
  }

}


