// models/post.js

const knex = require('../config/db_config'); // Import your Knex database connection

// Create a new post
async function createPost(post) {
  try {
     return await knex('posts').insert(post);
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error creating post: ' + error.message);
  }
}

// Find a post by ID
async function findPostById(id) {
  try {
    const post = await knex('posts').where('id', id).first();

    return post || null; // Post not found returns null
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error finding post by ID: ' + error.message);
  }
}

// Update a post's title and content
async function updatePost(postId, { title, content }) {
  try {
    await knex('posts')
      .where('id', postId)
      .update({ title, content });

    return true; // Post updated successfully
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error updating post: ' + error.message);
  }
}

// Delete a post by ID
async function deletePost(postId) {
  try {
    await knex('posts').where({ id: postId }).del();
    return true; // Post deleted successfully
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error deleting post: ' + error.message);
  }
}

module.exports = {
  createPost,
  findPostById,
  updatePost,
  deletePost,
};
