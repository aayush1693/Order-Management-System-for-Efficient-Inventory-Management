const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  lastUpdated: Date
});

module.exports = mongoose.model('Inventory', inventorySchema);
