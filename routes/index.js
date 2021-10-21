const app = require('express').Router();

// Import our modular router for notes
const notesRouter = require('./notes');
const htmlRouter = require('./htmlroutes')
// const app = express();
app.use(htmlRouter)


app.use('/api', notesRouter);

module.exports = app;