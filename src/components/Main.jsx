import { Route } from 'wouter'
import NotesContainer from './NotesContainer'

const Main = () => {
  return (
    <main className='min-h-[68vh] sm:min-h-[73.81vh]'>
      <Route path='/' component={NotesContainer} />
    </main>
  )
}

export default Main
