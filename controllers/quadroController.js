const Quadro = require('../models/Quadro');

// @desc    Create A Quadro
// @access  Public
exports.createQuadro = (req, res) => {
  const newQuadro = new Quadro({
    nome: req.body.nome,
    descricao: req.body.descricao
  });

  newQuadro.save()
    .then(quadro => res.json(quadro))
    .catch(err => res.status(500).json({ error: err.message }));
};


// @desc    Get All Quadros
// @access  Public
exports.getQuadros = (req, res) => {
  Quadro.find()
    .then(quadros => res.json(quadros))
    .catch(err => res.status(500).json({ error: err.message }));
};

// @desc    Delete A Quadro
// @access  Public
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


  exports.getIdQuadro = (req, res) => {

    Quadro.findById(req.params.id)
        .then(quadro => {
          if (!quadro) {
            return res.status(404).json({ error: 'Quadro not found' });
          }
          res.json(quadro);
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
