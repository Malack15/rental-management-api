const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/', propertyController.getProperties);
router.post('/', propertyController.addProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
