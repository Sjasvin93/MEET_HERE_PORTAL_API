// routes/postRoute.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const postController = require('../controllers/postController');

// Define create post route
router.post(
  '/create',
  [
    // Add validation middleware here if needed
  ],
  postController.createPost
);

// Define get post by ID route
router.get('/:id', postController.getPostById);

// Define update post route
router.put('/:id', [
    // Add validation middleware here if needed
  ], postController.updatePost);

// Define delete post route
router.delete('/:id', postController.deletePost);

module.exports = router;
