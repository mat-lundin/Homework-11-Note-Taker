const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

//logic for getting the notes and returning that as the response
notes.get('/',(req, res) => {
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)))
})

//logic for appending new note and updating the db 
notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        // note_id: uuidv4(),
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

module.exports = notes;