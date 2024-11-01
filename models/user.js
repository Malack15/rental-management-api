const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // password is not selected by default
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
