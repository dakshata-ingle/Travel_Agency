// models/CustomRequest.js
const mongoose = require('mongoose');

const customRequestSchema = new mongoose.Schema({
  destination: String,
  hotel: String,
  activities: String,
  special: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CustomRequest', customRequestSchema);
