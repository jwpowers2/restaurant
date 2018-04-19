import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UserService {

    constructor(private _http:HttpClient) { }

    register(user,cb){
		console.log("USER:",user);

		this._http.post("/api/users/register",user)
		.subscribe(data=>cb(data));
	}

	login(user,cb){
		this._http.post("/api/users/login",user)
		.subscribe(data=>cb(data));
	}

	logout(){
		localStorage.setItem("user","undefined");
	}

	isValid(){
		return localStorage.getItem("user") != "undefined";
	}

	session(){
		return localStorage.getItem("user");
	}  

}
