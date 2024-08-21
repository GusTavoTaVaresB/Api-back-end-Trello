const mongoose = require('mongoose');

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
        type: String,
        required: true,
        index: true,
        nullok: false
    },
})

const User = mongoose.model('user', UserSchema);

module.exports = User;