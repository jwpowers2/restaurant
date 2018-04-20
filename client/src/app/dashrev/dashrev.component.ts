import { Component, OnInit } from '@angular/core';
import { UserdashService } from "../userdash.service";

@Component({
  selector: 'app-dashrev',
  templateUrl: './dashrev.component.html',
  styleUrls: ['./dashrev.component.css']
})

// get a user, give a user id

export class DashrevComponent implements OnInit {
  
  private user:any;
  private reviews:any;
  private orders:any;

  constructor(private uds:UserdashService) { }

  ngOnInit() {
  	this.reviews = [];
  	this.getCurrentUser();
  	
  	
  }

  getCurrentUser(){
    this.uds.getuser(localStorage.getItem("user"),(data)=>{
    	if (data.errors){
    		console.log(data.errors);
    	} else {

    	  
          data.user.reviews.forEach(function(review_id){
          	  
          	  this.uds.getreview(review_id,(data)=>{
                if (data.review)this.reviews.push(data);
          	  });
          	  
          },this);
          
    	}
    });
  }


}
