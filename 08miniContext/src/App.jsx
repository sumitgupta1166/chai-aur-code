import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>chai aur react</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
