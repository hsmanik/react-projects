import Note from "./note";
import Addnote from "./addnotes";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <Addnote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
