const mongoose = require('mongoose');
// Tabela do quadro no DB
const quadroSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true,
        index: true,
        nullok: false 
    },

    descricao: { 
        type: String, 
        required: true, 
        index: true,
        nullok: false
    },

    nome_projeto: {
        type: mongoose.Schema.Types.ObjectId,
    ref: 'projeto'
    },


});

const Quadro = mongoose.model('quadro', quadroSchema);

module.exports = Quadro;