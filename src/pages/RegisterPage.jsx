import RegisterForm from '../components/RegisterForm'
import FormTitle from '../components/FormTitle'
import { useContext } from 'react'
import { userContext } from '../context/UserProvider'
import { Redirect } from 'wouter'

const LoginPage = () => {
  const { token } = useContext(userContext)
  return (
    <>
      {token && (<Redirect to='/' />)}
      <section className='flex justify-center items-center lg:pt-20'>
        <div className='bg-white dark:bg-neutral-800 border border-neutral-700 border-opacity-30 shadow-gray-600 dark:shadow-zinc-900 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
          <FormTitle
            to='/login'
            title='Registrate'
            text='¿Ya tenes una cuenta?'
            linkText='Inicia sesión acá'
          />
          <RegisterForm />
        </div>
      </section>
    </>
  )
}

export default LoginPage
