const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
connectDB();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
