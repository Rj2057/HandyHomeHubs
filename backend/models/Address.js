// models/Address.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User ', // Reference to the User model
  },
  address: {
    type: Object, // Assuming you want to store address as an object
    required: true,
  },
  phoneNumber: {
    type: String, // or Number, depending on your requirements
    required: true, // Set to true if you want to make it a required field
  },
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;