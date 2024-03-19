const mongoose = require('mongoose');

const RoomTypeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('RoomType', RoomTypeSchema);
