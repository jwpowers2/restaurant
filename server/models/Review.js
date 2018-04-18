let mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Review', new mongoose.Schema({

  text:{type: String, required:true, minlength:2, maxlength:255},
  restaurant:{type: ObjectId, ref: 'Restaurant'},
  user:{type: ObjectId, ref: 'User'}

},{timestamps: true}));
