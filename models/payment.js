const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  amount: { type: Number, required: true },
  datePaid: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);
