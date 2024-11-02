const Maintenance = require('../models/Maintenance');

// Get all maintenance requests
exports.getMaintenanceRequests = async (req, res) => {
  try {
    const maintenanceRequests = await Maintenance.find();
    res.json(maintenanceRequests);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a maintenance request
exports.addMaintenanceRequest = async (req, res) => {
  try {
    const { issue, status, date } = req.body;
    const maintenanceRequest = new Maintenance({ issue, status, date });
    await maintenanceRequest.save();
    res.status(201).json(maintenanceRequest);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a maintenance request
exports.deleteMaintenanceRequest = async (req, res) => {
  try {
    await Maintenance.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Maintenance request deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
