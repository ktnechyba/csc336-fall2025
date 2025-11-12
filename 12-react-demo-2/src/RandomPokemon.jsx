// use effect = function to call a certain amount or based on a state for the second argument
import { useState, useEffect } from 'react' 
// import './App.css'

import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function RandomPokemon() {
  let hello = "I'm excited to christmas market :)";

  // runs during the first load
  useEffect(()=>{
    console.log("in the effect")
  }, [])

  const [pokemon, setPokemon] = useState(null)
  const [pokeID, setPokeID] = useState(1);

  const fetchStuff = () =>{
    // const randomId = Math.floor(Math.random()*151) +1;
    // fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
    .then(res=> res.json())
    .then(data => {
      setPokemon({
        name:data.name,
        image: data.sprites.front_default
      })
    })
  }

  useEffect(()=> {
    fetchStuff()
  }, [pokeID]) //run when pokeid changes
  
  if (!pokemon) return <p>Loading...</p>

  return (
    <>
      <input type="text" 
        value={pokeID}
        onChange={e=> setPokeID(e.target.value)}
      />
      <img src={pokemon.image} alt="pokemon" />
      <h1>{pokemon.name}</h1>
      {/* <button onClick={fetchStuff}>Change Pokemon</button> */}

    
    </>
  )
}

export default RandomPokemon
