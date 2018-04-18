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
}

module.exports = new OrderController();