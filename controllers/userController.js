const User = require('../models/user');

// criar usuário
exports.createUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    priority: req.body.priority,
  });

  newUser.save()
    .then(User => res.json(User))
    .catch(err => res.status(500).json({ error: err.message }));
};


// get usuarios
exports.getUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

// deletar usuarios
exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };


// atualizar usuarios
exports.updateUser = (req, res) => {

  const updates = req.body
  User.findByIdAndUpdate(req.params.id, updates, {new : true})
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ success: true });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  };

// get usuario por ID
exports.getIdUser = (req, res) => {

  User.findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
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
