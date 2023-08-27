import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/noteslist";
import Search from "./components/search";
import Header from "./components/header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my First Note",
      date: "27/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date: "27/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date: "27/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my new Note",
      date: "27/07/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setdarkMode] = useState(false);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setdarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={deletenote}
        />
      </div>
    </div>
  );
};

export default App;
