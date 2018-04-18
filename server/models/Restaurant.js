let mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Restaurant', new mongoose.Schema({


  name:{type: String, required:true, minlength:2, maxlength:255},
  menu:{type: {}, required:true},
  address:{type:String},
  reviews:[{type: ObjectId, ref: 'Review'}],
  orders:[{type: ObjectId, ref: 'Order'}]

},{timestamps: true}));
