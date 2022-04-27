import { Route } from 'wouter'
import Home from '../pages/HomePage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'

const Main = () => {
  return (
    <main className='min-h-[85vh] sm:min-h-[83.5vh] bg-neutral-200 dark:bg-neutral-800'>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </main>
  )
}

export default Main
