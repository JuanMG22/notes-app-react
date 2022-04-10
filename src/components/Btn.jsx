const Btn = ({ children }) => {
  return (
    <button
      className='w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded bg-indigo-600  justify-center items-center p-2'
    >
      {children}
    </button>
  )
}

export default Btn
