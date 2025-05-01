import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import { ModeContextProvider } from './contexts/modeContext.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ModeContextProvider>
      <div className=''>
        <Header />
        <Skills />
        <Profile />
      </div>
    </ModeContextProvider>
  )
}

export default App
