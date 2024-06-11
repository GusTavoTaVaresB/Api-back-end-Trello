const express = require('express');
const router = express.Router();
const { createUser, getUsers, getIdUser, deleteUser, updateUser } = require('../controllers/userController');

// @route   POST /api/users
router.post('/user', createUser);

// @route   GET /api/users
router.get('/user', getUsers);

// @route   GET /api/users
router.get('/user/:id', getIdUser);

// @route   DELETE /api/users/:id
router.delete('/user/:id', deleteUser);

// @route   PUT /api/users/:id
router.put('/user/:id', updateUser);

module.exports = router;
