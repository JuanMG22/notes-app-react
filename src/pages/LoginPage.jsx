import LoginForm from '../components/LoginForm'
import FormTitle from '../components/FormTitle'
import { Redirect } from 'wouter'
import { useUser } from '../context/UserProvider'

const LoginPage = () => {
  const { token } = useUser()
  return (
    <>
      {token && (<Redirect to='/' />)}
      <section className='flex justify-center items-center lg:pt-20'>
        <div className='bg-white dark:bg-neutral-800 border border-neutral-700 border-opacity-30 shadow-gray-600 dark:shadow-zinc-900 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
          <FormTitle
            to='/register'
            title='Inicia Sesión'
            text='¿No tenes una cuenta?'
            linkText='Registrate acá'
          />
          <LoginForm />
        </div>
      </section>
    </>
  )
}

export default LoginPage
