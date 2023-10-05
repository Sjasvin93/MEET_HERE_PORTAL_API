// routes/index.js

const express = require('express');
const router = express.Router();

// Include other route files
const authRoute = require('./authRoutes');
const postRoute = require('./postRoutes');
const userRoute = require('./userRoutes');

// Define the home route
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Include the authentication routes
router.use('/auth', authRoute);

// Include the post-related routes
router.use('/posts', postRoute);

// Include the user-related routes
router.use('/users', userRoute);

module.exports = router;
