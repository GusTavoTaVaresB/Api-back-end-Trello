const Checklist = require('../models/checklist');

// @desc    Create A Checklist
// @access  Public
exports.createChecklist = (req, res) => {
  const newChecklist = new Checklist({
    title: req.body.title,
    task: req.body.task
  });

  newChecklist.save()
    .then(checklist => res.json(checklist))
    .catch(err => res.status(500).json({ error: err.message }));
};

// @desc    Get All Checklists
// @access  Public
exports.getChecklists = (req, res) => {
    Checklist.find()
    .then(checklist => res.json(checklist))
    .catch(err => res.status(500).json({ error: err.message }));
};

// @desc    Delete A Checklist
// @access  Public
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


// @desc    Update Checklist
// @access  Public
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

// @desc    Get A Checklist By Id
// @access  Public
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













// const createQuadro = async (req, res) => {
//     try {
//         const { nome, descricao } = req.body;
//         const newQuadro = new Quadro({ nome, descricao });
//         await newQuadro.save();
//         res.status(201).send(newQuadro);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };


// // Método para obter todos os Quadros
// const getQuadros = async (req, res) => {
//     try {
//         const quadros = await Quadro.find();
//         res.status(200).send(boards);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

// module.exports = {
//     createQuadro,
//     getQuadros,
// };