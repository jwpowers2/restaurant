let mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Order', new mongoose.Schema({

  item:{type: String, required:true, minlength:2, maxlength:255},
  quantity:{type: Number, required:true, minlength:2, maxlength:255},
  restaurant:{type: ObjectId, ref: 'Restaurant'},
  user:{type: ObjectId, ref: 'User'}

},{timestamps: true}));
