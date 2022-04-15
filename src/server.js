require('dotenv').config()

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());

routes(app);

app.listen(PORT, HOST);

module.exports = app;