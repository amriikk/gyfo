const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {type: String, required: true },
  reps: {type: String, required: true },
  description: String
}, {
  timestamps: true
});



module.exports = mongoose.model('Exercise', exerciseSchema);