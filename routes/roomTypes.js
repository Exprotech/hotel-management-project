const mongoose = require('mongoose');

// Define the schema for the RoomType model
const roomTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Create the RoomType model
const RoomType = mongoose.model('roomType', roomTypeSchema);

module.exports = RoomType;
