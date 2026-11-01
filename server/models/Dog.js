const mongoose = require('mongoose');

// schema for a dog
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    unique: true, 
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now, // set automatically when the dog is made
  },
});

const DogModel = mongoose.model('Dog', DogSchema);
module.exports = DogModel;