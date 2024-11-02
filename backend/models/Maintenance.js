const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
  issue: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);
