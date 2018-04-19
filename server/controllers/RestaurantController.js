let Restaurant = require("mongoose").model("Restaurant");
//let Review = require("mongoose").model("Review");
//let Order = require("mongoose").model("Order");

class RestaurantController{

  create(req,res){

    //res.json({"testing":"123"})
  	Restaurant.findOne({name:req.body.name},(err,restaurant)=>{
  		if(restaurant){
  			res.json({errors:"a restaurant with that name already exists"});
  		} else {
  			let newRestaurant = new Restaurant(req.body);
  			newRestaurant.save((err)=>{
  				if(err){
  					res.json({errors:newRestaurant.errors});
  				} else {
  					//req.session.user_id = newUser._id;
  					res.json(newRestaurant);
  				}
  			});
  		}
  	});


  }

  destroy(req,res){

    Restaurant.findOne({_id:req.body.id},(err,restaurant)=>{

    	if(!restaurant){
    		res.json({error:"record not found"});
    	} else {

            Restaurant.remove({_id:restaurant._id},(err)=>{
              if (err){
              	res.json({error:"problem removing record"});
              }	else {
              	res.json({status:"record removed"});
              }
            
            });
        }
    });

  }

}


module.exports = new RestaurantController();