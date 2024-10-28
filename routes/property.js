const express = require('express');
const { addProperty, getProperties } = require('../controllers/propertyController');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/add', authenticate, addProperty);
router.get('/', authenticate, getProperties);

module.exports = router;
