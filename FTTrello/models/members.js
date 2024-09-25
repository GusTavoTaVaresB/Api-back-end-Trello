const mongoose = require('mongoose');

const membrosSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    nome_projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projetos'
    }
});

const Member = mongoose.model('membros', membrosSchema);

module.exports = Member;
