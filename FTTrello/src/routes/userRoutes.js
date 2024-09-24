const express = require('express');
const router = express.Router();
const { 
    createUser, 
    getUsers, 
    getIdUser, 
    deleteUser, 
    updateUser 
} = require('../../controllers/userController');

// POST /api/users
router.post('/user', createUser);

//  GET /api/users
router.get('/user', getUsers);

//  GET /api/users
router.get('/user/:id', getIdUser);

//  DELETE /api/users/:id
router.delete('/user/:id', deleteUser);

//  PUT /api/users/:id
router.put('/user/:id', updateUser);

module.exports = router;
