import React from 'react'

const Notes = ({ notes }) => {
  return (

    <div className="notes">
      <h2>Notes</h2>
      <div className="list">
        {notes.length !== 0 ? (
          notes.map((note, idx) => {
            return (
              <div key={idx} className="note" id={idx}>
                <h3>{note.title}</h3>
                <p>{note.note}</p>
                <div className="delete">
                  <button
                    onClick={(e) => {
                      console.log(e.target.closest('.note'));
                    }}
                  >
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