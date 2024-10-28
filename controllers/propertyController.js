const Property = require('../models/property');

exports.addProperty = async (req, res) => {
  const { address, rentAmount } = req.body;
  const landlord = req.user.userId;

  try {
    const newProperty = new Property({ address, rentAmount, landlord });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add property' });
  }
};

exports.getProperties = async (req, res) => {
  const { role, userId } = req.user;

  try {
    let properties;
    if (role === 'landlord') {
      properties = await Property.find({ landlord: userId });
    } else if (role === 'tenant') {
      properties = await Property.find({ tenants: userId });
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve properties' });
  }
};
