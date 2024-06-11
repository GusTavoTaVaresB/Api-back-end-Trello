const mongoose = require('mongoose');

const quadroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
});

const Quadro = mongoose.model('quadro', quadroSchema);

module.exports = Quadro;


