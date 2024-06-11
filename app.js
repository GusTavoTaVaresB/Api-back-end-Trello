const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const quadroRoutes = require('./routes/quadroRoutes');

const app = express();


app.use(bodyParser.json());
// app.use(express.json({ extended: false }));

// Usar as rotas do Quadro
app.use('/api', quadroRoutes);

module.exports = app;