let Review = require("mongoose").model("Review");
let User = require("mongoose").model("User");
let Restaurant = require("mongoose").model("Restaurant");

class ReviewController{
  
  create(req,res){
  	User.findOne({_id:req.body.user},(err,user)=>{
        //res.json({"testing":user});
  		
  		Restaurant.findOne({name:req.body.restaurant},(err,restaurant)=>{
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

            					res.json({review_deleted:review._id});

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
/*
  		if(review){
  			res.json({errors:"the user has already reviewed that restaurant"});
  		} else {
  			let newReview = new Review(req.body);
  			newReview.save((err)=>{
  				if(err){
  					res.json({errors:newReview.errors});
  				} else {
  					
  					res.json(newReview);
  				}
  			});
  		}
  	});
  }
  // delete review will be an option on page with review json object so id is present
  destroy(req,res){
  	Review.findOne({_id:req.params.id},(err,review)=>{
  		if(!review){
  			res.json({errors:"the user has not reviewed that restaurant"});

  		} else {
            Review.remove({_id:review._id},(err)=>{
            	if(err){
            		console.log(err);
            	} else {
            		res.json({review_removed:review});
            	}

            })
  		}
  	});
  }
  */
}

module.exports = new ReviewController();