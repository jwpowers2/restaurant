import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashrevComponent } from './dashrev/dashrev.component';
import { DashordComponent } from './dashord/dashord.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }, 
  {path: 'dashrev', component: DashrevComponent}, 
  {path: 'dashord', component: DashordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
