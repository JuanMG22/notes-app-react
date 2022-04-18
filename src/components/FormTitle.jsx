import { Link } from 'wouter'

const FormTitle = ({ title, text, to, linkText }) => {
  return (
    <>
      <h2
        tabIndex='0'
        className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 dark:text-white'
      >
        {title}
      </h2>
      <p
        tabIndex='0'
        className='focus:outline-none text-sm mt-4 mb-4 font-medium leading-none text-gray-500 dark:text-gray-50'
      >
        {text}
        <Link
          to={to}
          className='mx-2 hover:text-gray-500 dark:hover:text-gray-50 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none dark:text-gray-100  text-gray-800 cursor-pointer'
        >
          {linkText}
        </Link>
      </p>
    </>
  )
}

export default FormTitle
