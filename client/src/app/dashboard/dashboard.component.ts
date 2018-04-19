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
  private reviews:any;
  private orders:any;

  constructor(private uds:UserdashService) { }

  ngOnInit() {
  	this.getCurrentUser();
  	this.reviews = [];
  	this.orders = [];
  }

  getCurrentUser(){
    this.uds.getuser(localStorage.getItem("user"),(data)=>{
    	if (data.errors){
    		console.log(data.errors);
    	} else {
    	  //console.log(data);
    	  this.user = data;
    	  // call function to make review array and order array here from data.user.reviews and data.user.orders
          //console.log(data.user.reviews);
    	  
          data.user.reviews.forEach(function(review_id){
          	  
          	  this.uds.getreview(review_id,(data)=>{
          		  this.reviews.push(data);
          	  });
          	  
          },this);

          data.user.orders.forEach(function(order_id){
          	  
          	  this.uds.getorder(order_id,(data)=>{
          		  this.orders.push(data);
          	  });
          	  
          },this);
          
    	}
    });
  }


}
