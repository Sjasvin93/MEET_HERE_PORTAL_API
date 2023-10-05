// models/user.js

const knex = require('../config/db_config'); // Import your Knex database connection

// Create a new user
async function createUser(user) {
  try {
    const [newUserId] = await knex('users').insert(user);
    return newUserId;
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error creating user: ' + error.message);
  }
}

// Find a user by username or email
async function findByUsernameOrEmail(usernameOrEmail) {
  try {
    const user = await knex('users')
      .where('username', usernameOrEmail)
      .orWhere('email', usernameOrEmail)
      .first();

    return user || null; // User not found returns null
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error finding user: ' + error.message);
  }
}

// Find a user by ID
async function findById(id) {
  try {
    const user = await knex('users').where('id', id).first();

    return user || null; // User not found returns null
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error finding user by ID: ' + error.message);
  }
}

// Update a user's password
async function updatePassword(userId, newPassword) {
  try {
    await knex('users')
      .where('id', userId)
      .update({ password: newPassword });

    return true; // Password updated successfully
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error updating user password: ' + error.message);
  }
}

// Delete a user by username
async function deleteUser(username) {
  try {
    await knex('users').where({ username }).del();
    return true; // User deleted successfully
  } catch (error) {
    // Handle the error (e.g., log it or throw a custom error)
    throw new Error('Error deleting user: ' + error.message);
  }
}

module.exports = {
  createUser,
  findByUsernameOrEmail,
  findById,
  updatePassword,
  deleteUser,
};
