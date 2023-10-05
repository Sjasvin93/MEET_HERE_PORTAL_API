// controllers/userController.js

const User = require('../models/user'); // Import the User model
const { validationResult } = require('express-validator');

// Create a new user
async function createUser(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    // Check if the user with the same username or email already exists
    const existingUser = await User.findByUsernameOrEmail(username || email);

    if (existingUser) {
      return res.status(400).json({ message: 'User with the same username or email already exists' });
    }

    // Create a new user record
    const newUser = await User.createUser({
      username,
      email,
      password,
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Get user by ID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove sensitive information like password before sending the response
    const { id, username, email } = user;

    return res.status(200).json({ user: { id, username, email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Update user's password
async function updateUserPassword(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.params.id;
    const { newPassword } = req.body;

    // Update the user's password
    const updatedUser = await User.updatePassword(userId, newPassword);

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User password updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;

    // Delete the user
    const deletedUser = await User.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUserPassword,
  deleteUser,
};
