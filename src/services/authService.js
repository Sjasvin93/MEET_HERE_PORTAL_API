// services/authService.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Generate a JWT token
function generateToken(userId, username) {
  const payload = {
    userId,
    username,
  };

  const options = {
    expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

// Verify a JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    // Token is invalid or has expired
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
