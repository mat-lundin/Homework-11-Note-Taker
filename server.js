const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');
const express = require('express');
const index = require('./routes/index.js');
// const notes = require('./routes/notes')

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/index', index)
app.use('/notes', notes);

app.use(express.static('public'));