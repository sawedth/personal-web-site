import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ModeContextProvider } from './contexts/modeContext.jsx'
import axios from 'axios'
import data from './data.json'
function App() {
  useEffect(() => {
    axios.post("https://reqres.in/api/workintech", data, {headers: {"x-api-key": "reqres-free-v1"}}).then((res) => console.log(res.data)).catch((err) => console.error(err))
  },[])

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
