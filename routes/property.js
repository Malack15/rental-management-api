// routes/property.js
const express = require('express');
const { addProperty, getProperties } = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addProperty);
router.get('/', getProperties);

module.exports = router;
