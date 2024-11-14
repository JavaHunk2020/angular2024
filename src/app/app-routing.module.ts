import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupsComponent } from './signups/signups.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
  { path: 'signups', component: SignupsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
