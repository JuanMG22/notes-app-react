import React, { useState, useEffect } from 'react'
import noteService from '../services/notes'
import NoteForm from './NoteForm'
import NotesList from './NotesList'

const NotesContainer = () => {
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
  }, [])

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
    <>
      <h1 className='mt-20 text-3xl flex justify-center'>Lista de Notas</h1>
      <NotesList
        loading={loading}
        notes={notes}
        setNotes={setNotes}
        setLoading={setLoading}
      />
      <NoteForm
        addNote={addNote}
        newNote={newNote}
        handleNoteChange={handleNoteChange}
      />
    </>
  )
}

export default NotesContainer
