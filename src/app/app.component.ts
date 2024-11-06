import { Component } from '@angular/core';
import { Signup } from './model/signup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cm-accounts';
  
  singups:Signup[] =[];

  public sendData(firstName:any,lastName:any,password:any , email:any) : void {
     let signup = new Signup();
     signup.firstName=firstName.value;
     signup.lastName=lastName.value;
     signup.password=password.value;
     signup.email=email.value;
     console.log(signup);
     this.singups.push(signup);
  }
}
