import { Component, OnInit } from '@angular/core';
import { UserdashService } from "../userdash.service";

@Component({
  selector: 'app-dashord',
  templateUrl: './dashord.component.html',
  styleUrls: ['./dashord.component.css']
})

export class DashordComponent implements OnInit {
  
  private user:any;
  private orders:any;

  constructor(private uds:UserdashService) { }

  ngOnInit() {

  	this.orders = [];
  	this.getCurrentUser();
  	
  }

  getCurrentUser(){

    this.uds.getuser(localStorage.getItem("user"),(data)=>{

    	if (data.errors){

    		console.log(data.errors);

    	} else {

          data.user.orders.forEach(function(order_id){
          	  
          	  this.uds.getorder(order_id,(data)=>{
          		  if(data.order)this.orders.push(data);
          	  });
          	  
          },this);
          
    	}
    });
  }


}
