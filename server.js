// const { readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');
const express = require('express');
const htmlRouter = require('./routes/htmlroutes.js');
const apiRouter = require('./routes/apiroutes')

const PORT = process.env.PORT || 3001;
// const PORT = 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use(htmlRouter);
app.use(apiRouter);
// app.use('/notes', notes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);