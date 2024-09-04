const Quadro = require('../models/quadro');

// criar quadro
exports.createQuadro = (req, res) => {
  const newQuadro = new Quadro({
    nome: req.body.nome,
    descricao: req.body.descricao
  });

  newQuadro.save()
    .then(quadro => res.json(quadro))
    .catch(err => res.status(500).json({ error: err.message }));
};

// get no quadros
exports.getQuadros = (req, res) => {
  Quadro.find()
    .then(quadros => res.json(quadros))
    .catch(err => res.status(500).json({ error: err.message }));
};

// deletar quadros
exports.deleteQuadro = (req, res) => {
    Quadro.findByIdAndDelete(req.params.id)
      .then(quadro => {
        if (!quadro) {
          return res.status(404).json({ error: 'Quadro not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };


// atualizar quadros
exports.updateQuadro = (req, res) => {

  const updates = req.body
  Quadro.findByIdAndUpdate(req.params.id, updates, {new : true})
      .then(quadro => {
        if (!quadro) {
          return res.status(404).json({ error: 'Quadro not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// get quadro por ID
exports.getIdQuadro = (req, res) => {

  Quadro.findById(req.params.id)
      .then(quadro => {
        if (!quadro) {
          return res.status(404).json({ error: 'Quadro not found' });
        }
        res.json(quadro);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };z