const express = require('express');
const catsRouter = require('./controllers/cats');
const middleware = require('./utils/middleware');
const dogsRouter = require('./controllers/dogs');

const app = express();

app.use(express.json());

app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter)

app.use(middleware.unknownEndpoint);

module.exports = app;
