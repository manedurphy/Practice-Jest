const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

const students = ['Elie', 'Matt', 'Joel', 'Michael'];

app.get('/', (req, res) => {
  res.status(200).json(students);
});

app.get('/post', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => res.status(200).json(json));
});

module.exports = app;
