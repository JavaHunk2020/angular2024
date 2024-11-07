import { Component } from '@angular/core';
import { Signup } from './model/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cm-accounts';

  signup:Signup ={} as Signup;
  signups:Signup[] =[];
  
  constructor(private http:HttpClient) {
       
  }

  public sendData() : void {
     this.signups.push(this.signup);
     let result : Observable<any> = this.http.post<any>("http://localhost:333/v1/signup",this.signup);
     result.subscribe(data=>{
        console.log(data);
     });
     this.signup={} as Signup;
  }
}
