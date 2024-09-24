const Project = require('../models/projetos');

// Cria projeto
exports.createProject = (req, res) => {
  const newProject = new Project({
    title: req.body.title,
    members: req.body.members
  });

  newProject.save()
    .then(projeto => res.json(projeto))
    .catch(err => res.status(500).json({ error: err.message }));
    
};

//get projeto
exports.getProject = (req, res) => {
    Project.find()
    .then(projeto => res.json(projeto))
    .catch(err => res.status(500).json({ error: err.message }));
};

//deletar projeto
exports.deleteProject = (req, res) => {
    Checklist.findByIdAndDelete(req.params.id)
      .then(projeto => {
        if (!projeto) {
          return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// atualizar projeto
exports.updateProject = (req, res) => {

  const updates = req.body
  Project.findByIdAndUpdate(req.params.id, updates, {new : true})
      .then(projeto => {
        if (!projeto) {
          return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };


// get projeto por ID
exports.getIdProject = (req, res) => {

  Project.findById(req.params.id)
      .then(projeto => {
        if (!PromiseRejectionEvent) {
          return res.status(404).json({ error: 'Project not found' });
        }
        res.json(projeto);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// Adiciona um membro a um projeto
const addMemberToProject = async (req, res) => {
  try {
    const { projectId, memberId } = req.body;

    const project = await Project.findById(projectId);
    const member = await member.findById(memberId);

    if (!project || !member) {
      return res.status(404).json({ error: 'Project or Member not found' });
    }

    if (!project.member.includes(memberId)) {
      project.member.push(memberId);
      await project.save();
    }

    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lista todos os projetos e seus membros
const getAllProjects = async (req, res) => {
  try {
    const projetos = await Project.find().populate('membros');
    res.json(projetos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProjects,
  addMemberToProject, 
};