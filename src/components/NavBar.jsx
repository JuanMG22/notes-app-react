const NavBar = () => {
  return (
    <header className='h-[3rem] fixed w-full bg-gray-900 top-0'>
      <nav className='flex justify-evenly'>
        <li className='cursor-pointer lg:w-1/6 w-2/4 flex items-center justify-center truncate uppercase select-none font-semibold rounded-full py-2 h-full hover:bg-indigo-600  hover:transform hover:transition-transform text-xl list-none transition-all transition-200'>Notes App</li>

      </nav>
    </header>
  )
}

export default NavBar
