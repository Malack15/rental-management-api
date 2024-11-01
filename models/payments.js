const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: Number,
  date: Date,
  status: String,
});

const Payment = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
