const Btn = ({ children, btnType }) => {
  let estilos = ''

  if (btnType === 'btnNote') {
    estilos = 'flex justify-center items-center rounded px-2  py-2 font-semibold hover:text-bold text-white bg-indigo-600 hover:bg-indigo-700 transition transition-200'
  } else {
    estilos = 'w-1/2 sm:w-2/3 2xl:w-1/3 mt-5 rounded px-4 py-2 font-semibold hover:text-bold text-white bg-indigo-600 hover:bg-indigo-700 transition transition-200'
  }
  return (
    <button
      className={estilos}
    >
      {children}
    </button>
  )
}

export default Btn
