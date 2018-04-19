let User = require("mongoose").model("User");
//et User = require("mongoose").model("Review");
//let User = require("mongoose").model("Order");

class UserController{
  
  register(req,res){
  	User.findOne({email:req.body.email},(err,user)=>{
  		if(user){
  			res.json({errors:"a user with this email already exists"});
  		} else {
  			let newUser = new User(req.body);
  			newUser.save((err)=>{
  				if(err){
  					res.json({errors:newUser.errors});
  				} else {
  					req.session.user_id = newUser._id;
  					res.json(newUser);
  				}
  			});
  		}
  	});
  }

  login(req,res){
  	User.findOne({email:req.body.email},(err,user)=>{
  		if(!user){
  			res.json({errors:"No user with this email was found"});

  		} else {
  			if(req.body.password == user.password){
  				req.session.user_id = user._id;
  				res.json(user);
  			} else {
  				res.json({errors:"Invalid credentials"});
  			}
  		}
  	});
  }

  update(req,res){

    User.findOne({_id:req.params.id},(err,user)=>{

    	user.first_name = req.body.first_name;
    	user.last_name = req.body.last_name;
    	user.address = req.body.address;
    	user.phone = req.body.phone;
    	user.email = req.body.email;
    	user.password = req.body.password;
    	
    	user.save((err)=>{
    		if(err){
    			res.json({error:"problem with user update"});
    		} else {
    			res.json({user_modified_to:user});
    		}
    	});
    });

  }

  all(req,res){
  	User.find({},(err,users)=>{
  		if(!users){
  			res.json({errors:"no users found"});
  		} else {
  			res.json(users);
  		}
  	});
  }

  read(req,res){

    User.findOne({_id:req.params.id},(err,user)=>{

    	if(!user){
    		res.json({"errors":"user not found"});
    	} else {
    		res.json({user:user});
    	}

    });

  }

}

module.exports = new UserController();