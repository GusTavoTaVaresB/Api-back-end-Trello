const express = require('express');
const router = express.Router();
const { 
    createQuadro,
    getQuadros, 
    getIdQuadro, 
    deleteQuadro, 
    updateQuadro 
} = require('../controllers/quadroController');

// POST /api/projects
router.post('/quadros', createQuadro);

// GET /api/quadros
router.get('/quadros', getQuadros);

// GET /api/quadros
router.get('/quadros/:id', getIdQuadro);

// DELETE /api/quadros/:id
router.delete('/quadros/:id', deleteQuadro);

// PUT /api/quadros/:id
router.put('/quadros/:id', updateQuadro);

module.exports = router;
