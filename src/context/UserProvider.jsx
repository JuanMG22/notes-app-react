import { createContext, useContext } from 'react'
import { useLocation } from 'wouter'

export const userContext = createContext()

export const useUser = () => {
  const context = useContext(userContext)
  return context
}

const UserProvider = ({ children }) => {
  const getToken = () => localStorage.getItem('token')
  const token = getToken()
  const userId = localStorage.getItem('userId')

  const [location, setLocation] = useLocation()

  const logOut = () => {
    localStorage.clear()
    setLocation('/')
    window.location.reload()
  }

  const contextValue = {
    getToken,
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
