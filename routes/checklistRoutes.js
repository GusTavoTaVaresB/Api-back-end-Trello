const express = require('express');
const router = express.Router();
const { createChecklist, getChecklists, getIdChecklist, deleteChecklist, updateChecklist } = require('../controllers/checklistController');

// @route   POST /api/checklist
router.post('/checklist', createChecklist);

// @route   GET /api/checklist
router.get('/checklist', getChecklists);

// @route   GET /api/checklist
router.get('/checklist/:id', getIdChecklist);

// @route   DELETE /api/checklist/:id
router.delete('/checklist/:id', deleteChecklist);

// @route   PUT /api/checklist/:id
router.put('/checklist/:id', updateChecklist);

module.exports = router;
