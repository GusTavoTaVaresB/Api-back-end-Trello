const express = require('express');
const router = express.Router();
const { 
    createChecklist,
    getChecklists, 
    getIdChecklist, 
    deleteChecklist, 
    updateChecklist
} = require('../controllers/checklistController');

// POST /api/checklist
router.post('/checklist', createChecklist);

// GET /api/checklist
router.get('/checklist', getChecklists);

// GET /api/checklist
router.get('/checklist/:id', getIdChecklist);

// DELETE /api/checklist/:id
router.delete('/checklist/:id', deleteChecklist);

// PUT /api/checklist/:id
router.put('/checklist/:id', updateChecklist);

module.exports = router;
