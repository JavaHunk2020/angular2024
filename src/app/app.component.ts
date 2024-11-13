import { Component, OnInit } from '@angular/core';
import { Signup } from './model/signup.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cm-accounts';

  signup:Signup ={} as Signup;
  signups:Signup[] =[];
  
  constructor(private http:HttpClient) {
       
  }

  ngOnInit(): void {
    let result : Observable<Signup[]> = this.http.get<Signup[]>("http://localhost:333/v1/signups");
    result.subscribe(data=>{
       console.log(data);
       this.signups=data;
    }); 
  }

  public deleteData(signup:Signup) : void {
    let result : Observable<any> = this.http.delete<any>("http://localhost:333/v1/signups/"+signup.id);
    result.subscribe(data=>{
       this.signups= this.signups.filter(u=>u.id!=signup.id);
    });

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
