import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  private user:any;
  private loggedIn:any;
  private error:any;

  constructor(private router:Router,
  	          private us:UserService) { }


  register(){
	this.us.register(this.user,(data)=>{
		if(data.errors){
			this.error = data.errors;
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
