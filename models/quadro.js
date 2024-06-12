const mongoose = require('mongoose');

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

    projeto: {
        type: String,   
        required: true,
        index: true,
        nullok: false
    },


});

const Quadro = mongoose.model('quadro', quadroSchema);

module.exports = Quadro;