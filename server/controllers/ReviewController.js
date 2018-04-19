let _ = require("underscore");
let Review = require("mongoose").model("Review");
let User = require("mongoose").model("User");
let Restaurant = require("mongoose").model("Restaurant");

class ReviewController{
  
  create(req,res){
  	User.findOne({_id:req.body.user},(err,user)=>{
        //res.json({"testing":user});
  		
  		Restaurant.findOne({_id:req.body.restaurant},(err,restaurant)=>{
           
  			var review = new Review(req.body);
  			review.restaurant = restaurant._id;
  			restaurant.reviews.push(review);
            user.reviews.push(review);
            review.save((err)=>{
            	restaurant.save((err)=>{
            		if(err){
            			console.log("error");
            		} else {
            			user.save((err)=>{
            				if(err){
            					console.log("error");
            				} else{
            					res.json({"review_saved":review});
            					
            				}
            			});
            		}
            	});
            	
            });
            
  		});
  		
    });
  }

  destroy(req,res){

  	Review.findOne({_id:req.body.id},(err,review)=>{
      //if (err)console.log(err);
      console.log(review);
  	  User.findOne({_id:review.user},(err,user)=>{
  		
  		Restaurant.findOne({_id:review.restaurant},(err,restaurant)=>{
  			
  			restaurant.orders = _.reject(restaurant.orders, function(el) { return el._id === req.body.id});
            user.orders = _.reject(user.orders, function(el) { return el._id === req.body.id});

            Review.remove({_id:review._id},(err)=>{

            	restaurant.save((err)=>{

            		if(err){

            			console.log("error");

            		} else {

            			user.save((err)=>{

            				if(err){

            					console.log("error");

            				} else{

            					res.json({"review_deleted":review});

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

    Review.findOne({_id:req.params.id},(err,review)=>{

    	if(!review){
    		res.json({"errors":"review not found"});
    	} else {
    		res.json({review:review});
    	}

    });

  }

  all(req,res){

    Review.find({},(err,reviews)=>{

    	if(!reviews){
    		res.json({"errors":"review not found"});
    	} else {
    		res.json({reviews:reviews});
    	}

    });

  }

}

module.exports = new ReviewController();