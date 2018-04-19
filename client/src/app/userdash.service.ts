import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserdashService {

    constructor(private _http:HttpClient) { }

    

 	getuser(user,cb){
		this._http.get("/api/users/" + user)
		.subscribe(data=>cb(data));
	}

	getreview(id,cb){
		this._http.get("/api/reviews/" + id)
		.subscribe(data=>cb(data));
	}

	getorder(id,cb){
		this._http.get("/api/orders/" + id)
		.subscribe(data=>cb(data));
	}
}