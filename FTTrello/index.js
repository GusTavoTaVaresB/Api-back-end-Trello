require('dotenv').config(); 
const connectDB = require('./config/db'); 
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = require('./src/server');
connectDB(); 
const port = 3000;


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});