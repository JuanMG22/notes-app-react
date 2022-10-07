import { Redirect } from 'wouter'
import NotesContainer from '../components/NotesContainer'
import { useUser } from '../context/UserProvider'

const HomePage = () => {
  const { getToken } = useUser()

  return (
    <>
      {!getToken() && (<Redirect to='/login' />)}
      <NotesContainer />
    </>
  )
}

export default HomePage
