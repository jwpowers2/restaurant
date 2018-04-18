# MEAN setup instructions

mkdir project

cd project

touch server.js README.md .gitignore
  
npm init -y

git init

start mongo daemon

systemctl start mongod

mkdir server
cd server
mkdir config controllers models

cd config 
touch mongoose.js routes.js

-- open mongoose.js and paste this in, change <DBNAME> to your DB's NAME --


let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');
let models = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/<DBNAME>');

fs.readdirSync(models).forEach(function(file){

  if(file.indexOf('.js') >= 0){

    require(models + '/' + file);

  }

});




----------------------------------------------------------------------

-- open routes.js, import pertinent controllers and assign routes to controllers and appropriate methods --


let TaskController = require("../controllers/TaskController.js");

module.exports = (app)=>{

  app.get("/",TaskController.all);
  app.post("/tasks",TaskController.new_task);
  app.delete("/tasks/:id",TaskController.remove_task);
  app.get("/tasks/:id",TaskController.task);
  app.put("/tasks/:id",TaskController.mod_task);

}



--------------------------------------------------------------------
 

go back to server directory

cd into models

-- create a model file for each of your models, for instance --



let mongoose = require('mongoose');

mongoose.model('Task', new mongoose.Schema({

  title:{type: String, required:true, minlength:2, maxlength:255},
  description:{type: String, default:""},
  completed:{type: Boolean,default:false}

},{timestamps: true}));




-------------------------------------------------------------------


-- and example of a model with a one to many relationship ---

--- a POST has many comments and a comment has only one POST

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });


var CommentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });

----------------------------------------------------------------

go back to the server directory and cd into controllers

you can have multiple controllers and models must be required as needed

let Task = require("mongoose").model("Task");

------------------------------------------------------------------



go back to the server.js file in project root -- here is boilerplate 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, ()=>{
    console.log("listening on port 8000");
})

-----------------------------------------------------------

use npm to install dependencies:

npm install express body-parser bcrypt-as-promised path mongoose express-session --save

-------------------------------------------------------

start angular project and call it client

ng new client --routing

------------------------------------------------------
