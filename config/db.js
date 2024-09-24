const mongoose = require('mongoose');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const mongoURI = process.env.MONGO_URI;

// Nome do banco de dados e coleção
const dbName = 'quadro';
const collectionName = 'item';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1);
    }
};


module.exports = connectDB;

// // Função de conexão com o banco de dados MongoDB
// async function connectToDatabase() {
//     try {
//         // Conectar ao servidor MongoDB
//         const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();

//         // Selecionar o banco de dados
//         const db = client.db(dbName);

//         // Selecionar a coleção
//         const collection = db.collection(collectionName);

//         // Realizar operações no banco de dados...
        
//         // Exemplo: inserir um documento na coleção
//         await collection.insertOne({ name: 'John', age: 30 });

//         console.log('Conexão com o banco de dados estabelecida com sucesso.');
        
//         // Fechar a conexão com o banco de dados quando terminar de usar
//         await client.close();
//     } catch (error) {
//         console.error('Erro ao conectar ao banco de dados:', error);
//     }
// }

// // Chamar a função de conexão com o banco de dados
// connectToDatabase();