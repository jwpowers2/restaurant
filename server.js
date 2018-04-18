var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
let session = require("express-session");
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/client/dist"));
app.use(express.json());
app.use(session({secret:"hideme"}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port,()=>{
	console.log("Listening on: "+port);
});
