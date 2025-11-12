// use effect = function to call a certain amount or based on a state for the second argument
import { useState, useEffect } from 'react' 
// import './App.css'
import Home from './Home'
import About from './About';
import RandomPokemon from './RandomPokemon'

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  let hello = "I'm excited to christmas market :)";

  // // runs during the first load
  // useEffect(()=>{
  //   console.log("in the effect")
  // }, [])

  // const [pokemon, setPokemon] = useState(null)
  // const [pokeID, setPokeID] = useState(1);

  // const fetchStuff = () =>{
  //   // const randomId = Math.floor(Math.random()*151) +1;
  //   // fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
  //   .then(res=> res.json())
  //   .then(data => {
  //     setPokemon({
  //       name:data.name,
  //       image: data.sprites.front_default
  //     })
  //   })
  // }

  // useEffect(()=> {
  //   fetchStuff()
  // }, [pokeID]) //run when pokeid changes
  
  // if (!pokemon) return <p>Loading...</p>

  // let arr = [1,2,3,4,5,6]
  return (
    <>

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pokemon">Pokemon</Link>
        </nav>
      </BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pokemon" element={<RandomPokemon/>}></Route>
      </Routes>
    </>
  )
}

export default App
