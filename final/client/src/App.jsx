import { useState } from 'react'
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Cat from './Cat.jsx'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <h1>Cat Location</h1>
            <div id='links'>
              <NavLink to='/' className='navlink'>Home</NavLink>
              <NavLink to='/about' className='navlink'>About</NavLink>
              <NavLink to='/cats' className='navlink'>Add a Cat</NavLink>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/cats' element={<Cat/>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
