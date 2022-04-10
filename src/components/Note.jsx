import noteService from '../services/notes'
import Btn from './Btn'

const Note = ({ note, setLoading, setNotes, notes }) => {
  const updateNotes = () => {
    noteService
      .getAll()
      .then(updatedNotes => {
        setNotes(updatedNotes)
      })
  }
  const deleteNote = (event) => {
    event.preventDefault()
    setLoading(true)
    noteService
      .remove(note.id)
      .then(() => {
        updateNotes()
        setTimeout(() => { setLoading(false) }, 300)
      })
      .catch(err => {
        console.error(err)
      })
  }
  return (
    <li className='flex flex-row my-2'>
      <form
        method='DELETE'
        onSubmit={deleteNote}
        className='flex flex-1 items-center transition duration-200 ease-in-out transform hover:-translate-y-2 rounded p-6 hover:shadow-2xl outline-1  outline-gray-100 bg-zinc-700'
      >
        <div className='flex-1 pl-1 mr-16'>
          <div className='font-medium'>
            {note.content}
          </div>
        </div>
        <Btn>Borrar</Btn>
      </form>
    </li>
  )
}

export default Note
