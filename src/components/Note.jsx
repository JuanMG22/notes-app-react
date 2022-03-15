import noteService from '../services/notes'

const Note = ({ note, setLoading }) => {
  const deleteNote = (event) => {
    event.preventDefault()
    setLoading(true)
    noteService
      .remove(note.id)
      .then(() => {
        setTimeout(() => {
          setLoading(false)
        }, 500)
        location.reload()
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
        <button
          className='w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded bg-indigo-600  justify-center items-center p-2'
        >
          Borrar
        </button>
      </form>
    </li>
  )
}

export default Note
