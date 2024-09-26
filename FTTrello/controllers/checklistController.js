const Checklist = require('../models/checklist');

// criar checklist
exports.createChecklist = (req, res) => {
  const newChecklist = new Checklist({
    title: req.body.title,
    task: req.body.task
  });

  newChecklist.save()
    .then(checklist => res.json(checklist))
    .catch(err => res.status(500).json({ error: err.message }));
};

// get checklist
exports.getChecklists = (req, res) => {
    Checklist.find()
    .then(checklist => res.json(checklist))
    .catch(err => res.status(500).json({ error: err.message }));
};

// deletar checklist
exports.deleteChecklist = (req, res) => {
    Checklist.findByIdAndDelete(req.params.id)
      .then(checklist => {
        if (!checklist) {
          return res.status(404).json({ error: 'Checklist not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };


// atualizar checklist
exports.updateChecklist = (req, res) => {

  const updates = req.body
  Checklist.findByIdAndUpdate(req.params.id, updates, {new : true})
      .then(checklist => {
        if (!checklist) {
          return res.status(404).json({ error: 'Checklist not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// get checklist por ID
exports.getIdChecklist = (req, res) => {

  Checklist.findById(req.params.id)
      .then(checklist => {
        if (!checklist) {
          return res.status(404).json({ error: 'Checklist not found' });
        }
        res.json(checklist);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };