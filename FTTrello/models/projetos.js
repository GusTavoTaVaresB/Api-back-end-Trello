const mongoose = require('mongoose');

const projetosSchema = new mongoose.Schema({
  nome_projeto: {
    type: String,
    required: true
  },
  quadro:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quadro'
  },
  membros: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }]
});

const Project = mongoose.model('projeto', projetosSchema);

module.exports = Project;
