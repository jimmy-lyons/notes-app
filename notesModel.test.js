const notesModel = require('./notesModel.js');

describe("Notes", () => {
  it("Returns empty array when initialised", () => {
    const notes = new notesModel;
    expect(notes.getNotes()).toEqual([]);
  });

  it("Adds 'buy vanilla' to list", () => {
    const notes = new notesModel;
    notes.addNote("Buy vanilla");

    expect(notes.getNotes()).toEqual(["Buy vanilla"]);
  })
});