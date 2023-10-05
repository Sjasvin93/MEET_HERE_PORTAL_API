// controllers/postController.js

const Post = require('../models/post'); // Import the Post model
const { validationResult } = require('express-validator');

// Create a new post
async function createPost(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userId, title, content } = req.body;

    // Create a new post record
    const newPostId = await Post.createPost({
      userId,
      title,
      content,
    });

    return res.status(201).json({ message: 'Post created successfully', postId: newPostId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Get a post by ID
async function getPostById(req, res) {
  try {
    const postId = req.params.id;

    // Find the post by ID
    const post = await Post.findPostById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Update a post
async function updatePost(req, res) {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const postId = req.params.id;
    const { title, content } = req.body;

    // Update the post
    const updated = await Post.updatePost(postId, { title, content });

    if (!updated) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

// Delete a post
async function deletePost(req, res) {
  try {
    const postId = req.params.id;

    // Delete the post
    const deleted = await Post.deletePost(postId);

    if (!deleted) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
