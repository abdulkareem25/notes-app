import React, { useState, useEffect } from 'react'
import Notes from './Notes';

const Form = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('notes')) {
            localStorage.setItem('notes', JSON.stringify(notes));
        } else {
            setNotes(JSON.parse(localStorage.getItem('notes')));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const submitHandler = (e) => {
        e.preventDefault();

        setNotes([...notes, { title: title, note: note }]);

        setTitle('');
        setNote('');
    }

    return (
        <>
            <div className='form-container'>
                <h2>Add Note</h2>
                <form onSubmit={e => submitHandler(e)}>
                    <div className='form-group'>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Enter Title'
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="note">Note</label>
                        <textarea
                            type="text"
                            name="note"
                            id="note"
                            placeholder='Enter note'
                            required
                            value={note}
                            onChange={e => setNote(e.target.value)}
                        />
                    </div>
                    <button type="submit">Add Note</button>
                </form>
            </div>
            <Notes notes={notes} />
        </>
    )
}

export default Form