const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  stock_quantity: {
    type: Number,
    required: true,
    default: 0
  },
  pharmacist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacist',
    required: true,
  }
}, {
  timestamps: true
});

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;
