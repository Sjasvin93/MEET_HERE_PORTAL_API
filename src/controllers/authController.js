// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/user'); // Import the User model
const { validationResult } = require('express-validator');

// Register a new user
async function registerUser(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the user with the same username or email already exists
    const { username, email, password } = req.body;

    const existingUser = await User.findByUsernameOrEmail(username || email);

    if (existingUser) {
      return res.status(400).json({ message: 'User with the same username or email already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user record
    const newUser = await User.createUser({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Log in a user
async function loginUser(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the user exists
    const { usernameOrEmail, password } = req.body;

    const user = await User.findByUsernameOrEmail(usernameOrEmail);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
    });

    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  registerUser,
  loginUser,
};
