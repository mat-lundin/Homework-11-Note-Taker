const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

//logic for getting the notes and returning that as the response
notes.get('/api/notes',(req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

//logic for appending new note and updating the db 
notes.post('/api/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: Math.floor(Math.random()*100),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  notes.delete('/api/notes/:id',(req,res) => {
    const noteToDel = req.params.id;
    readAndDelete(noteToDel,'./db/db.json');
    res.json(`Note added successfully 🚀`);
  })

module.exports = notes;