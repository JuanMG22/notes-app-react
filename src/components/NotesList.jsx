import Note from './Note'
import Loader from './Loader'
import EmptyNotes from './EmptyNotes'

const NotesList = ({ loading, notes, setNotes, setLoading, user }) => {
  return (
    <>
      {loading && (<Loader />)}
      <div className='container mb-2 flex mx-auto w-full items-center justify-center'>
        <ul className='flex flex-col p-4'>
          {notes.length === 0 && !loading && (<EmptyNotes />)}
          {!loading && notes.map((note) =>
            <Note
              key={note.id}
              id={note.id}
              user={user}
              note={note}
              setLoading={setLoading}
              setNotes={setNotes}
            />
          )}
        </ul>
      </div>
    </>
  )
}

export default NotesList
