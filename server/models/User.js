let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('User', new mongoose.Schema({

  first_name:{type: String, required:true, minlength:2, maxlength:255},
  last_name:{type: String, required:true, minlength:2, maxlength:255},
  address:{type: String, required:true, minlength:2, maxlength:255},
  phone:{type: String, required:true, minlength:2, maxlength:255},
  email:{type: String, required:true, minlength:5, maxlength:255},
  password:{type: String, required:true, minlength:5, maxlength:2048},
  reviews:[{type: ObjectId, ref: 'Review'}],
  orders:[{type: ObjectId, ref: 'Order'}]

},{timestamps: true}));
