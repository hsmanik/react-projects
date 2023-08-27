import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setnoteText] = useState("");
  const characterlimit = 200;

  const handleChange = (event) => {
    if (characterlimit - event.target.value.length >= 0) {
      setnoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setnoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterlimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnote;
