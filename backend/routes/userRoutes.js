const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Your route that uses the middleware
router.get('/profile', authMiddleware, async (req, res) => {
  // Profile route logic
});

module.exports = router;
