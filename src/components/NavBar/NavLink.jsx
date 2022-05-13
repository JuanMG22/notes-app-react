import { Link } from 'wouter'

const NavLink = ({ children, click, to }) => {
  return (
    <li className='text-gray-700 hover:text-gray-50 dark:text-white cursor-pointer lg:w-1/6 w-2/4 truncate uppercase select-none font-semibold rounded py-2 h-full hover:bg-indigo-600  hover:transform hover:transition-transform text-xl list-none transition-all transition-200'>
      <Link
        className='w-full h-full flex justify-center items-center'
        href={to}
        onClick={click}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLink
