// models/User.js

const mongoose = require("mongoose");

// Define the User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

// Create the User model
const User = mongoose.model('User ', UserSchema);

module.exports = User; // Export the model for use in other parts of your application