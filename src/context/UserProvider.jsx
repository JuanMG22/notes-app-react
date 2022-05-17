import { createContext } from 'react'
import { useLocation } from 'wouter'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')

  const [location, setLocation] = useLocation()

  const logOut = () => {
    localStorage.clear()
    setLocation('/')
    window.location.reload()
  }

  const contextValue = {
    token,
    logOut,
    setLocation
  }

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
