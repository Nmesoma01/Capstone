const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

// Dashboard Route (Protected)
app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard');
});

// Profile Update Page
app.get('/profile', (req, res) => {
    res.send('Profile Update Page');
});

// Listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
