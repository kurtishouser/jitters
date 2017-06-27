'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

const countries = require('./src/routes/countries');
const producers = require('./src/routes/producers');

app.use(countries);
app.use(producers);

app.use((req, res) => {
  res.sendStatus(404);
});

let port = process.env.PORT || 8000;

if (app.get('env') === 'test') { port = 8080; }

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
