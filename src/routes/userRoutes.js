// routes/userRoute.js

const express = require('express');
const router = express.Router();
// const { body } = require('express-validator');

// const userController = require('../controllers/userController');
const tempUserController = require('../controllers/usercontrollerpractice')

// Define create user route
router.post(
  '/create',tempUserController.createUser
);

// // Define get user by ID route
// router.get('/:id', userController.getUserById);

// // Define update user password route
// router.put('/:id/update-password', [
//     // Add validation middleware here if needed
//   ], userController.updateUserPassword);

// // Define delete user route
// router.delete('/:id', userController.deleteUser);

module.exports = router;
