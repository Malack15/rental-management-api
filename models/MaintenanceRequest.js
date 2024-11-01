const mongoose = require('mongoose');

const MaintenanceRequestSchema = new mongoose.Schema({
  issue: String,
  status: String,
  date: Date,
});

const MaintenanceRequest = mongoose.models.MaintenanceRequest || mongoose.model('MaintenanceRequest', MaintenanceRequestSchema);

module.exports = MaintenanceRequest;
