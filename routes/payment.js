// backend/routes/payments.js
const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// GET all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new payment
router.post('/', async (req, res) => {
  try {
    const { amount, date, status } = req.body;
    if (!amount) {
      return res.status(400).json({ msg: 'Please provide amount for the payment.' });
    }
    const newPayment = new Payment({ amount, date, status });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
