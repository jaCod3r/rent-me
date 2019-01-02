const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: {type: String, required: true, max: [128, 'Title is too long.']},
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now }
})

// Name and Schema
module.exports = mongoose.model('Rental', rentalSchema);
