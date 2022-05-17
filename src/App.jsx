import './index.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import UserProvider from './context/UserProvider'

const App = () => {
  return (
    <UserProvider>
      <NavBar />
      <Main />
      <Footer />
    </UserProvider>
  )
}

export default App
