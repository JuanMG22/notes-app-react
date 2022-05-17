import React, { useState, useEffect } from 'react'
import userService from '../services/userService'
import notesService from '../services/notesService'
import NoteForm from './NoteForm'
import NotesList from './NotesList'

const NotesContainer = () => {
  const [notes, setNotes] = useState({})
  const [user, setUser] = useState({})
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const userId = localStorage.getItem('userId')
    try {
      const userData = await userService.getUser(userId)
      setNotes(userData.notes)
      setUser(userData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote
    }
    setLoading(true)
    const token = localStorage.getItem('token')
    notesService
      .createNote(noteObject, token)
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
      <h1 className='pt-20 text-3xl flex justify-center text-black dark:text-white'>Lista de Notas</h1>
      <NotesList
        loading={loading}
        notes={notes}
        setNotes={setNotes}
        user={user}
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
