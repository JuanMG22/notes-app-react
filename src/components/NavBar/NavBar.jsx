import { FaSignOutAlt } from 'react-icons/fa'
import { useContext, useState, useEffect } from 'react'
import { userContext } from '../../context/UserProvider'
import userService from '../../services/userService'
import NavLink from './NavLink'
import Nav from './Nav'
import { SidenavPage } from './SideBar'

const NavBar = () => {
  const { logOut, token, userId } = useContext(userContext)
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
      <SidenavPage />
      {token &&
        <NavLink to='/' click={logOut}>
          {userName}
          <FaSignOutAlt className='ml-2' />
        </NavLink>}
    </Nav>
  )
}

export default NavBar
