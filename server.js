const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Property = require('./models/property'); // Adjust the path as needed
const Payment = require('./models/payment');
const MaintenanceRequest = require('./models/MaintenanceRequest');
require('dotenv').config();

const app = express();
connectDB();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from the server" });
});

// Routes
app.use('/auth', authRoutes);
app.use('/properties', propertyRoutes);

// Port
const PORT = process.env.PORT || 5000;
console.log("Starting server on port:", PORT);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const Property = mongoose.model('Property', new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
  }));
  
  const Payment = mongoose.model('Payment', new mongoose.Schema({
    amount: Number,
    date: Date,
    status: String,
  }));
  
  const MaintenanceRequest = mongoose.model('MaintenanceRequest', new mongoose.Schema({
    issue: String,
    status: String,
    date: Date,
  }));
  
  // Properties endpoints
  app.get('/properties', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
  });
  
  app.post('/properties', async (req, res) => {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).json(newProperty);
  });
  
  app.delete('/properties/:id', async (req, res) => {
    await Property.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  
  // Payments endpoints
  app.get('/payments', async (req, res) => {
    const payments = await Payment.find();
    res.json(payments);
  });
  
  app.post('/payments', async (req, res) => {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json(newPayment);
  });
