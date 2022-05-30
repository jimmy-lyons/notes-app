class notesModel {

  constructor() {
    this.notesList = []
  }

  getNotes() {
    return this.notesList;
  }

  addNote(note) {
    this.notesList.push(note);
  }
};

module.exports = notesModel;