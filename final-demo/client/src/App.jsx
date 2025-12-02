import { useState, useEffect } from 'react'
import './App.css'

// ./ in src
// /foldername = refers to things in the public

function App() {
  const [fromServer, setServer] = useState({something:10})

  useEffect(()=> {
    fetch("/api/data")
    .then(result=> result.json())
    .then(data => setServer(data))
  }, []);
  return (
    <>
      {fromServer.something}
    </>
  )
}

export default App
