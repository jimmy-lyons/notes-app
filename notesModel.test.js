const notesModel = require('./notesModel.js');

describe("Notes", () => {
  it("Returns empty array when initialised", () => {
    const notes = new notesModel;
    expect(notes.getNotes()).toEqual([]);
  });
});