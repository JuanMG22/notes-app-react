
const Nav = ({ children }) => {
  return (
    <header className='h-[3rem] fixed top-0 z-50 w-full bg-white dark:bg-neutral-900'>
      <nav className='flex justify-between items-center'>
        {children}
      </nav>
    </header>
  )
}

export default Nav
