// backend/routes/properties.js
const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new property
router.post('/', async (req, res) => {
  try {
    const { name, location, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ msg: 'Please provide name and price for the property.' });
    }
    const newProperty = new Property({ name, location, price });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a property by ID
router.delete('/:id', async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
