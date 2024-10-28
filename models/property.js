const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  landlord: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  rentAmount: { type: Number, required: true },
  leaseStart: { type: Date },
  leaseEnd: { type: Date }
});

module.exports = mongoose.model('Property', propertySchema);
