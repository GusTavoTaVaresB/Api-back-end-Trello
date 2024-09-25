const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const quadroRoutes = require('./routes/quadroRoutes')
const userRoutes = require('.src/routes/userRoutes');
const checklistRoutes = require('.src/routes/checklistRoutes');

const app = express();


app.use(bodyParser.json());
// app.use(express.json({ extended: false }));

// Usar as rotas do Quadro
app.use('/api', quadroRoutes);
app.use('/api', userRoutes);
app.use('/api', checklistRoutes);

module.exports = app;