const dotenv = require('dotenv').config(); // Carregue as variáveis de ambiente primeiro
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

console.log('Mongo URI:', mongoURI); // Log da URI para debug

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
