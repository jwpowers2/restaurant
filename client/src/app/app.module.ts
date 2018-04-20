import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {UserdashService} from "./userdash.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardnavbarComponent } from './dashboardnavbar/dashboardnavbar.component';
import { DashrevComponent } from './dashrev/dashrev.component';
import { DashordComponent } from './dashord/dashord.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DashboardnavbarComponent,
    DashrevComponent,
    DashordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,
              UserdashService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
