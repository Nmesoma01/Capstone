const express = require('express');
const User = require('./user');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to check if user is authenticated
const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.redirect('/login');

    try {
        const decoded = jwt.verify(token, 'todo - jwt token ');
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.redirect('/login');
    }
};

// Profile update route (requires authentication)
router.post('/profile', authenticate, async (req, res) => {
    const { name, address, bio, image } = req.body;
    
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update profile
        user.profile.name = name || user.profile.name;
        user.profile.address = address || user.profile.address;
        user.profile.bio = bio || user.profile.bio;
        user.profile.image = image || user.profile.image;

        await user.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Dashboard route (requires authentication aswell)
router.get('/dashboard', authenticate, async (req, res) => {
    res.json({ message: 'Welcome to your dashboard' });
});

module.exports = router;
