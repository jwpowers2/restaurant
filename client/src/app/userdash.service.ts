import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserdashService {

    constructor(private _http:HttpClient) { }

    

 	getuser(user,cb){
		this._http.get("/api/users/" + user)
		.subscribe(data=>cb(data));
	}
}