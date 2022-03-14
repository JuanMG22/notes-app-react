const NoteForm = ({ addNote, newNote, handleNoteChange }) => {
  return (
    <form method='POST' onSubmit={addNote} className='flex justify-center mt-10'>
      <div className='flex flex-col items-center rounded w-[20rem]'>
        <input
          type='search'
          className='w-full border-none bg-transparent px-4 py-2 text-gray-50 bg-gray-700 outline-current outline-0 focus:outline-1 rounded'
          placeholder='Escribe una nota'
          onChange={handleNoteChange}
          value={newNote}
        />

        <button
          type='submit'
          className='w-[20rem] m-2 rounded px-4 py-2 font-semibold hover:text-bold text-white bg-indigo-600 hover:bg-indigo-700 transition transition-200'
        >
          Agregar
        </button>
      </div>
    </form>
  )
}

export default NoteForm
