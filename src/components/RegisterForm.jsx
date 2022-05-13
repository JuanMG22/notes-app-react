import userService from '../services/userService'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import Btn from './Btn'
import Label from './Label'
import FormError from './FormError'

const RegisterForm = () => {
  const [location, setLocation] = useLocation()

  console.log(location)

  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      email: data.email.toLowerCase(),
      password: data.password
    }

    try {
      await userService
        .userRegister(userData)

      setLocation('/login')
    } catch (error) {
      console.log(error)
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label to='name' text='Nombre' />
      <input
        type='text'
        aria-labelledby='name'
        name='name'
        className='input'
        id='name'
        {...register('name', {
          required: {
            value: true,
            message: 'Ingrese un nombre'
          },
          pattern: {
            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
            message: 'Ingrese un nombre valido'
          }
        })}
      />
      {errors.name && (<FormError err={errors.name.message} />)}
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
      {errors.email && (<FormError err={errors.email.message} />)}
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
      {errors.password && (<FormError err={errors.password.message} />)}
      <Btn>
        Registrarse
      </Btn>
    </form>
  )
}

export default RegisterForm
