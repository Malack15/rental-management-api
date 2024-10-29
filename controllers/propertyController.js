// controllers/propertyController.js
const Property = require('../models/property');

exports.addProperty = async (req, res) => {
  try {
    const { title, description, address, price } = req.body;
    const property = await Property.create({ title, description, address, price, landlord: req.user.id });
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate('landlord', 'name email');
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
