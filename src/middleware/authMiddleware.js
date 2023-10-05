// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
  // Get the token from the request headers
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Access denied: Invalid token' });
    }

    // Store the decoded token data in the request object for later use
    req.user = decoded;
    next(); // Call the next middleware
  });
}

module.exports = {
  authenticateToken,
};
