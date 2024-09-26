const mongoose = require('mongoose');
// Tabela dos users no DB
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        nullok: false
    },

    password: {
        type: String,
        required: true,
        unique: true,
        nullok: false
    },

    email: {
        type: String,
        required: true,
        unique: true,
        nullok: false
    },
        
    priority: {
        type: Boolean,
        required: true,
        unique: false,
        index: true,
        nullok: false
    },

    nome_projeto: {
        type: mongoose.Schema.Types.ObjectId,
    ref: 'nome_projeto',
    },
})

const User = mongoose.model('user', UserSchema);

module.exports = User;