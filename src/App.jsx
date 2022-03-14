import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import './index.css'
import NavBar from './components/NavBar'
import NoteForm from './components/NoteForm'
import Loader from './components/Loader'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [notes])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote
    }
    setLoading(true)
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
        setLoading(false)
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <NavBar />
      <h1 className='mt-20 text-3xl flex justify-center'>Lista de Notas</h1>
      {loading
        ? (
          <Loader />
          )
        : (
          <>
            <div
              className='container mb-2 flex mx-auto w-full items-center justify-center'
            >
              <ul className='flex flex-col p-4'>
                {notes.map((note) =>
                  <Note
                    key={note.id}
                    id={note.id}
                    note={note}
                    setLoading={setLoading}
                  />
                )}
              </ul>
            </div>
          </>
          )}
      <NoteForm
        addNote={addNote}
        newNote={newNote}
        handleNoteChange={handleNoteChange}
      />
      <Footer />
    </div>
  )
}

export default App
