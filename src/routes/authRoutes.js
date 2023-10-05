// routes/authRoute.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const authController = require('../controllers/authController');

// Define registration route
router.post(
  '/register',
  [
    // Add validation middleware here if needed
  ],
  authController.registerUser
);

// Define login route
router.post(
  '/login',
  [
    // Add validation middleware here if needed
  ],
  authController.loginUser
);

module.exports = router;
