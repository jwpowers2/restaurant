let _ = require("underscore");
let Order = require("mongoose").model("Order");
let User = require("mongoose").model("User");
let Restaurant = require("mongoose").model("Restaurant");

class OrderController{
  
  create(req,res){
  	User.findOne({_id:req.body.user},(err,user)=>{
  		
  		Restaurant.findOne({name:req.body.restaurant},(err,restaurant)=>{
  			var order = new Order(req.body);
  			order.restaurant = restaurant._id;
  			restaurant.orders.push(order);
            user.orders.push(order);
            order.save((err)=>{
            	restaurant.save((err)=>{
            		if(err){
            			console.log("error");
            		} else {
            			user.save((err)=>{
            				if(err){
            					console.log("error");
            				} else{
            					res.json({"order_saved":order});
            				}
            			});
            		}
            	});
            });
  		});
  		
    });
  }

  destroy(req,res){

  	Order.findOne({_id:req.body.id},(err,order)=>{

  	  User.findOne({_id:order.user},(err,user)=>{
  		
  		Restaurant.findOne({_id:order.restaurant},(err,restaurant)=>{
  			//var order = new Order(req.body);
  			//order.restaurant = restaurant._id;
  			//restaurant.orders.push(order);
  			restaurant.orders = _.reject(restaurant.orders, function(el) { return el._id === req.body.id});
            //user.orders.push(order);
            user.orders = _.reject(user.orders, function(el) { return el._id === req.body.id});
            Order.remove((err)=>{
            	restaurant.save((err)=>{
            		if(err){
            			console.log("error");
            		} else {
            			user.save((err)=>{
            				if(err){
            					console.log("error");
            				} else{
            					res.json({order_deleted:req.body.id});
            				}
            			});
            		}
            	});
            });
  		});
  		
      });
    });

  }

  read(req,res){

    Order.findOne({_id:req.params.id},(err,order)=>{
    	if(!order){
    		res.json({"errors":"order not found"});
    	} else {
    		res.json({order:order});
    	}
    })

  }

}

module.exports = new OrderController();