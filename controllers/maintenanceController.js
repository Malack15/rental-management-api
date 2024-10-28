const Maintenance = require('../models/maintenance');

exports.requestMaintenance = async (req, res) => {
  const { propertyId, issue } = req.body;
  const tenantId = req.user.userId;

  try {
    const maintenance = new Maintenance({ property: propertyId, tenant: tenantId, issue });
    await maintenance.save();
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to request maintenance' });
  }
};

exports.getMaintenanceRequests = async (req, res) => {
  try {
    const requests = await Maintenance.find({ property: { $in: req.user.properties } });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve maintenance requests' });
  }
};
