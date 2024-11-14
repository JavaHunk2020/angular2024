import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../model/signup.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {

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

}
