import notesService from '../services/notesService'
import userService from '../services/userService'
import Btn from './Btn'

const Note = ({ note, setLoading, setNotes, notes }) => {
  const updateNotes = async () => {
    const userId = localStorage.getItem('userId')
    try {
      const userData = await userService.getUser(userId)
      setNotes(userData.notes)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteNote = (event) => {
    event.preventDefault()
    setLoading(true)
    const token = localStorage.getItem('token')
    notesService
      .removeNote(note.id, token)
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
        <Btn btnType='btnNote'>
          Borrar
        </Btn>
      </form>
    </li>
  )
}

export default Note
