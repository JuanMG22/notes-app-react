import { FaSignOutAlt } from 'react-icons/fa'
import { useUser } from '../../context/UserProvider'
import { useState, useEffect } from 'react'
import userService from '../../services/userService'
import NavLink from './NavLink'
import Nav from './Nav'

const NavBar = () => {
  const { logOut, getToken, userId } = useUser()
  const token = getToken()
  const [userName, setUserName] = useState('')
  useEffect(async () => {
    try {
      const userData = await userService.getUser(userId)
      setUserName(userData.name)
    } catch (error) {
      console.log(error)
    }
  }, [token])

  return (
    <Nav>
      <NavLink to='/'>
        Notes App
      </NavLink>
      {token &&
        <NavLink to='/' click={logOut}>
          {userName}
          <FaSignOutAlt className='ml-2' />
        </NavLink>}
    </Nav>
  )
}

export default NavBar
