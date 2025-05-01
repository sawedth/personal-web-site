import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ModeContextProvider } from './contexts/modeContext.jsx'
function App() {
  

  return (
    <ModeContextProvider>
      <div className=''>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </ModeContextProvider>
  )
}

export default App
