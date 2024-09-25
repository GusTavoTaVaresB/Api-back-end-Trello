const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const quadroRoutes = require('./routes/quadroRoutes')
<<<<<<< HEAD
const userRoutes = require('./routes/userRoutes');
const checklistRoutes = require('./routes/checklistRoutes');
=======
const userRoutes = require('.src/routes/userRoutes');
const checklistRoutes = require('.src/routes/checklistRoutes');
>>>>>>> 54132492f018c431a40c3454f1bad290f68c2b51

const app = express();


app.use(bodyParser.json());
// app.use(express.json({ extended: false }));

// Usar as rotas do Quadro
app.use('/api', quadroRoutes);
app.use('/api', userRoutes);
app.use('/api', checklistRoutes);

module.exports = app;