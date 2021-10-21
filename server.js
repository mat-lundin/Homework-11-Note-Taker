// const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');
const express = require('express');
// const index = require('./routes/index.js');
// const notes = require('./routes/notes')

// const PORT = process.env.port || 3001;
const PORT = 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use('/', index)
// app.use('/notes', notes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);