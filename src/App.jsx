import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/index.'
import Home from "./pages/Home/index"
import About from './pages/About'

function App() {

  return (
    <div >
      <Navbar/>
      <main className='container'>
        {/* <Home/> */}
        <About/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
