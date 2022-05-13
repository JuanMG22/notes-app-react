import { Redirect } from 'wouter'
import NotesContainer from '../components/NotesContainer'

const HomePage = () => {
  const token = localStorage.getItem('token')
  return (
    <>
      {!token && (<Redirect to='/login' />)}
      <NotesContainer />
    </>
  )
}

export default HomePage
