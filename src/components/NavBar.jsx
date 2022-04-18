import { Link } from 'wouter'
import { FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import { userContext } from '../context/UserProvider'

const NavBar = () => {
  const { logOut, token } = useContext(userContext)
  const userLogged = token ? 'flex' : 'hidden'
  return (
    <header className='h-[3rem] fixed top-0 z-50 w-full bg-white dark:bg-neutral-900'>
      <nav className='flex justify-evenly'>
        <li className='text-gray-700 hover:text-gray-50 dark:text-white cursor-pointer lg:w-1/6 w-2/4 flex items-center justify-center truncate uppercase select-none font-semibold rounded py-2 h-full hover:bg-indigo-600  hover:transform hover:transition-transform text-xl list-none transition-all transition-200'>
          <Link className='w-full h-full flex justify-center items-center' href='/'>
            Notes App
          </Link>
        </li>
        <li
          className={` ${userLogged} text-gray-700 hover:text-gray-50 dark:text-white cursor-pointer lg:w-1/6 w-2/4 items-center justify-center truncate uppercase select-none font-semibold rounded py-2 h-full hover:bg-indigo-600  hover:transform hover:transition-transform text-xl list-none transition-all transition-200`}
          onClick={logOut}
        >
          <Link
            className='flex w-full h-full justify-center items-center'
            href='/login'
          >
            Cerrar Sesión
            <FaSignOutAlt className='ml-1 lg:ml-1' />
          </Link>
        </li>

      </nav>
    </header>
  )
}

export default NavBar
