const notesModel = require('./notesModel')
const notes = new notesModel

console.log('The notes app is running')
console.log(notes.getNotes())
