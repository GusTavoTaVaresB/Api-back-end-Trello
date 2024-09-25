const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


const app = require('./src/server');

const connectDB = require('./config/db');


connectDB();

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});