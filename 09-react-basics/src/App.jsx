import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
import TheList from "./TheList.jsx"
import About from './About.jsx'
import Museum from './Museum.jsx'
import "./App.css"

function App() {


  return (
    <div className=" background router-home">
      <BrowserRouter>
        <nav>
          <NavLink to='/' className='navlink'>Home</NavLink>
          <NavLink to='/about' className='navlink'>About</NavLink>
          <NavLink to='/museum' className='navlink'>Metropolitan Art Museum</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<TheList/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/museum' element={<Museum/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
