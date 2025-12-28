import React from 'react'
import { useEffect } from 'react';

const Notes = ({ notes, setNotes }) => {

  const handleDelete = (e) => {
    let note = e.target.closest('.note');
    const updatedNotes = notes.filter((_, idx) => idx !== parseInt(note.dataset.index));
    setNotes(updatedNotes);
  }

  return (

    <div className="notes">
      <h2>Notes</h2>
      <div className="list">
        {notes.length !== 0 ? (
          notes.map((note, idx) => {
            return (
              <div key={idx} className="note" data-index={idx}>
                <h3>{note.title}</h3>
                <p>{note.note}</p>
                <div className="delete">
                  <button onClick={e => handleDelete(e)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-notes">
            <h3>No Notes Available</h3>
            <p>Please add a note to see it listed here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notes