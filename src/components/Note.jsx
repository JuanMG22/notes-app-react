import notesService from '../services/notesService'
import userService from '../services/userService'
import Btn from './Btn'

const Note = ({ note, setLoading, setNotes, user }) => {
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
        className='flex flex-1 items-center justify-center transition duration-200 ease-in-out transform hover:-translate-y-2 rounded p-6 hover:shadow-2xl outline-1  outline-gray-100 bg-zinc-700'
      >
        <div className='flex-shrink-0 w-10 h-10 mr-2'>
          <img
            className='w-full h-full rounded-full'
            src='https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg'
            alt='avatar'
          />
        </div>
        <div className='flex-1 pl-1 mr-16'>
          <p className='font-bold'>
            {note.content}
          </p>
          <p className='font-medium text-gray-400'>
            {user.name}
          </p>
          <p className='text-sm mt-1 text-gray-500'>
            {note.date}
          </p>
        </div>
        <Btn btnType='btnNote'>
          Borrar
        </Btn>
      </form>
    </li>
  )
}

export default Note
