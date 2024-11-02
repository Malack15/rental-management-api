const Payment = require('../models/Payment');

// Get all payments
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a payment
exports.addPayment = async (req, res) => {
  try {
    const { amount, date, status } = req.body;
    const payment = new Payment({ amount, date, status });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a payment
exports.deletePayment = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Payment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
