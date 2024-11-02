const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.get('/', maintenanceController.getMaintenanceRequests);
router.post('/', maintenanceController.addMaintenanceRequest);
router.delete('/:id', maintenanceController.deleteMaintenanceRequest);

module.exports = router;
