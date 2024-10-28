const express = require('express');
const { requestMaintenance, getMaintenanceRequests } = require('../controllers/maintenanceController');
const authenticate = require('../middleware/auth');
const router = express.Router();

router.post('/request', authenticate, requestMaintenance);
router.get('/', authenticate, getMaintenanceRequests);

module.exports = router;
