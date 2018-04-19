import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private user:any;
  private loggedIn:any;

  constructor(private router:Router,
  	          private us:UserService) { }

  login(){
	this.us.login(this.loggedIn,(data)=>{
		if(data.errors){
			console.log(data.errors);
		}else{
			localStorage.setItem("user",data._id);
			this.router.navigate(["/home"]);
		}
	});
  }


  ngOnInit() {

  	this.user = {
  		email:"",
  		password:""
  	};
  	this.loggedIn = {
		email:"",
		password:""
	};
	this.us.logout();
  }


}
