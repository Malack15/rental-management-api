const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', (req, res) => {
  console.log('Register request:', req.body); // Debugging line
  register(req, res);
});

router.post('/login', login);

module.exports = router;
