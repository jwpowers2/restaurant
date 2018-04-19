let _ = require("underscore");
let Order = require("mongoose").model("Order");
let User = require("mongoose").model("User");
let Restaurant = require("mongoose").model("Restaurant");

class OrderController{
  
  create(req,res){

  	User.findOne({_id:req.body.user},(err,user)=>{
  		
  		Restaurant.findOne({_id:req.body.restaurant},(err,restaurant)=>{

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

      if (!order){
      	res.json({error:"that order does not exist"});
      } else {
     
  	  User.findOne({_id:order.user},(err,user)=>{
  		
  		if (!user){
  			console.log("no user");
  		} else {
  		  console.log(user.orders);
  		  
  		  user.orders = _.reject(user.orderss, function(el) {return el == req.body.id});
  		  console.log(user.orders);

  		  user.save((err)=>{

            if(err){

              console.log("error");

            } else{

              console.log("review deleted for user");

            }

          });
        }
      });
      Restaurant.findOne({_id:order.restaurant},(err,restaurant)=>{
  		    
  		if (!restaurant){
  		    console.log("no restaurant");
  		} else {

  			restaurant.orders = _.reject(restaurant.orders, function(el) { return el == req.body.id});
  			//console.log(restaurant.orders);
            restaurant.save((err)=>{

              if(err){

            	console.log("error");

              } else {

                console.log("review deleted for restaurant");
              }
            }); 
        }
      });
      
      Order.remove({_id:order._id},(err)=>{

        if (err){
        	console.log("order not deleted");
        } else {
        	res.json({order_deleted:order});
        }
            
  	  });
    }
    });

  }

  update(req,res){

    Order.findOne({_id:req.params.id},(err,order)=>{
    	order.item = req.body.item;
    	order.quantity = req.body.quantity;
    	
    	order.save((err)=>{
    		if(err){
    			res.json({error:"problem with order update"});
    		} else {
    			res.json({order_modified_to:order});
    		}
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

    });

  }

  all(req,res){

    Order.find({},(err,orders)=>{

    	if(!orders){
    		res.json({"errors":"orders not found"});
    	} else {
    		res.json({orders:orders});
    	}

    });

  }

}

module.exports = new OrderController();