const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
});

const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

module.exports = Property;
