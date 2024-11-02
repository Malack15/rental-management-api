const Property = require('../models/Property');

// Get all properties
exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a property
exports.addProperty = async (req, res) => {
  try {
    const { name, location, price } = req.body;
    const property = new Property({ name, location, price });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
