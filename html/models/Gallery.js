const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  imageUrl: String,
  caption: String,
  uploadedBy: String, // optionally track uploader name/email
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);
