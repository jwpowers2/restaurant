import { Component, OnInit } from '@angular/core';
import { UserdashService } from "../userdash.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// get a user, give a user id

export class DashboardComponent implements OnInit {
  
  private user:any;
  private review_id_array:any;

  constructor(private uds:UserdashService) { }

  ngOnInit() {
  	this.getCurrentUser();
  }

  getCurrentUser(){
    this.uds.getuser(localStorage.getItem("user"),(data)=>{
    	if (data.errors){
    		console.log(data.errors);
    	} else {
    	  console.log(data);
    	  this.user = data;
    	  // call function to make review array and order array here from data.user.reviews and data.user.orders
    	}
    });
  }


}
