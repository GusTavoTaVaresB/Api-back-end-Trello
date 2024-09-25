const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


<<<<<<< HEAD
const app = require('../index');
=======
const app = require('../src/index');
>>>>>>> 54132492f018c431a40c3454f1bad290f68c2b51
const connectDB = require('../config/db');


connectDB();

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});