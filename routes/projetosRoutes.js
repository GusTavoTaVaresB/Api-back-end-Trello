const express = require('express');
const router = express.Router();
const {
    createProject,
    getAllProjects,
    getProjectById,
    addMemberToProject,
    updateProject,
    deleteProject,
} = require('../controllers/projetoController');

// POST /api/projetos
router.post('/projetos', createProject);

// GET /api/projetos
router.get('/projetos', getAllProjects);

// GET /api/projetos/:id
router.get('/projetos/:id', getProjectById);

// POST /api/projetos/addMember
router.post('/projetos/addMember', addMemberToProject);

// PUT /api/projetos/:id
router.put('/projetos/:id', updateProject);

// DELETE /api/projetos/:id
router.delete('/projetos/:id', deleteProject);

module.exports = router;
