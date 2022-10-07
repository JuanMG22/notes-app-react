import Btn from './Btn'
import Label from './Label'
import FormError from './FormError'
import { useForm } from 'react-hook-form'
import loginService from '../services/loginService'
import { useLocation } from 'wouter'

const LoginForm = () => {
  const [location, setLocation] = useLocation()
  const onSubmit = async (data) => {
    const userData = {
      email: data.email.toLowerCase(),
      password: data.password
    }
    try {
      const user = await loginService.login(userData)
      const { id, token } = user

      localStorage.setItem('token', token)
      localStorage.setItem('userId', id)

      resetField('email')
      resetField('password')

      setLocation('/')
    } catch (error) {
      console.log(error)
    }
  }

  const { register, resetField, handleSubmit, formState: { errors } } = useForm()

  const { email, password } = errors

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label to='email' text='Email' />
      <input
        type='text'
        aria-labelledby='email'
        name='email'
        className='input'
        id='email'
        {...register('email', {
          required: {
            value: true,
            message: 'Ingrese un email'
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Ingrese un email valido'
          }
        })}
      />
      {email && (<FormError err={email.message} />)}
      <Label to='pass' text='Contraseña' />
      <input
        type='password'
        aria-labelledby='password'
        name='password'
        className='input'
        id='pass'
        {...register('password', {
          required: {
            value: true,
            message: 'Ingrese una contraseña'
          }
        })}
      />
      {password && (<FormError err={password.message} />)}
      <Btn>
        Iniciar sesión
      </Btn>
    </form>
  )
}

export default LoginForm
