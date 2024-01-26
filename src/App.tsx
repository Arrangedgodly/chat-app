import { useState, useEffect } from 'react'
import Header from './components/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Setup from './components/Setup'
import { auth } from './lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [setupComplete, setSetupComplete] = useState(false)
  const navigate = useNavigate()

  const handleAuthChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }

  useEffect(() => {
    handleAuthChange()
  }, [])

  useEffect(() => {
    if (loggedIn && !setupComplete) {
      navigate('/setup')
    }
  }, [loggedIn, setupComplete])

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path='/login' element={<Login loggedIn={loggedIn} />} />
        <Route path='/signup' element={<Signup loggedIn={loggedIn} />} />
        <Route path='/setup' element={<Setup />} />
      </Routes>
    </>
  )
}

export default App
