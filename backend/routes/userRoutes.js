const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Endpoint para registrar usuarios
router.post('/register', async (req, res) => {
  const { name, email, password, comments } = req.body;

  try {
    const newUser = new User({ name, email, password, comments });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
