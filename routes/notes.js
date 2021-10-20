const notes = require('express').Router();

//logic for getting the notes and returning that as the response
notes.get('/',(req, res) => {

})

//logic for appending new note and updating the db 
notes.post('/', (req,res) => {

})

module.exports = notes;