const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },

  // 🔗 Link to User
  

  // 📌 Admin tracking
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },

  // 📝 Optional Notes (for admin or future feature)
  notes: {
    type: String,
    default: ''
  },

  // ⏱️ Timestamps (auto-generated)
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);