const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
