const express = require('express');
const router = express.Router();
const { createQuadro, getQuadros, getIdQuadro, deleteQuadro, updateQuadro } = require('../controllers/quadroController');

// @route   POST /api/quadros
router.post('/quadros', createQuadro);

// @route   GET /api/quadros
router.get('/quadros', getQuadros);

// @route   GET /api/quadros
router.get('/quadros/:id', getIdQuadro);

// @route   DELETE /api/quadros/:id
router.delete('/quadros/:id', deleteQuadro);

// @route   PUT /api/quadros/:id
router.put('/quadros/:id', updateQuadro);

module.exports = router;
