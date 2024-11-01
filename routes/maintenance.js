// backend/routes/maintenance.js
const express = require('express');
const router = express.Router();
const MaintenanceRequest = require('../models/MaintenanceRequest');

// GET all maintenance requests
router.get('/', async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new maintenance request
router.post('/', async (req, res) => {
  try {
    const { issue, status, date } = req.body;
    if (!issue) {
      return res.status(400).json({ msg: 'Please provide an issue description.' });
    }
    const newRequest = new MaintenanceRequest({ issue, status, date });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT to update a maintenance request by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRequest = await MaintenanceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRequest) {
      return res.status(404).json({ msg: 'Maintenance request not found.' });
    }
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
