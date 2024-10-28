const Payment = require('../models/payment');

exports.payRent = async (req, res) => {
  const { propertyId, amount } = req.body;
  const tenantId = req.user.userId;

  try {
    const payment = new Payment({
      tenant: tenantId,
      property: propertyId,
      amount,
      dueDate: new Date() // This can be handled differently
    });

    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Payment failed' });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ tenant: req.user.userId });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve payments' });
  }
};
