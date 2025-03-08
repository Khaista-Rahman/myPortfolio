import { useState } from 'react'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/projects'
import Expert from './components/Expert'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Education/>
    <Experience/>
    <Projects/>
    <Expert/>
    <Footer/>
    </>
  )
}

export default App
