const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  datePlaced: Date,
  status: String
});

module.exports = mongoose.model('Order', orderSchema);
