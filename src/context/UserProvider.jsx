import { createContext } from 'react'
import { useLocation } from 'wouter'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')

  const [location, setLocation] = useLocation()

  const logOut = () => {
    localStorage.clear()
    setLocation('/')
  }

  const contextValue = {
    token,
    logOut,
    location,
    setLocation,
    userId
  }

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
