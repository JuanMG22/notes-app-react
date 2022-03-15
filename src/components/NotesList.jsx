import Note from './Note'
import Loader from './Loader'

const NotesList = ({ loading, notes, setNotes, setLoading }) => {
  return (
    <>
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
                    setNotes={setNotes}
                  />
                )}
              </ul>
            </div>
          </>
          )}
    </>
  )
}

export default NotesList