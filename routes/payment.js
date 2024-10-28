const express = require('express');
const { payRent, getPayments } = require('../controllers/paymentController');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/pay', authenticate, payRent);
router.get('/', authenticate, getPayments);

module.exports = router;
