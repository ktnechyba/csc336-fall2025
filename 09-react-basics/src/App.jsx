import { useState } from 'react'
import ListItem from "./ListItem"
import "./App.css"

function App() {
  const [items, setItems] = useState([
    {
      id:1,
      dessert: "Pain au Chocolat",
      description: "Laminated dough with a flaky texture and two pieces of chocolate",
      origin:"French adaptation of Austrian pastry"
    },
    {
      id:2,
      dessert: "Tangyuan",
      description: "Sweet glutinous rice dumplings with a sweet or savory filling (like black sesame or red bean paste) in clear syrp or soup.",
      origin:"China"
    },
    {
      id:3,
      dessert: "Sachertorte",
      description: "Chocolate sponge cake with chocolate glaze and apricot jam",
      origin:"Austria"
    },
    {
      id:4,
      dessert: "Gulab Jamun",
      description: "Moist, sweet, fried dough soaked in syrup flavored with cardamom and rose water",
      origin:"India"
    }
])

const [inputValue, setInputValue] = useState("")
const [descriptionValue, setDescriptionValue] = useState("")
const [originValue, setOriginValue] = useState("")

function handleAdd(){
  let newDessert = {
    id: items.length+1,
    dessert: inputValue,
    description: descriptionValue,
    origin: originValue
  }
  setItems([...items, newDessert])
  setInputValue("")
  setDescriptionValue("")
  setOriginValue("")
}

  return (
    <div id="background">
      <h1>Tasty Treats from Around the World</h1>
      <div id="form">
        <label>
          Dessert Name: 
          <input 
            type='text' 
            value={inputValue}
            onChange={e=> setInputValue(e.target.value)}
          />
        </label>
      
        <label>
          Origin of Dessert: 
          <input 
            type='text' 
            value={originValue}
            onChange={e=> setOriginValue(e.target.value)}
          />
        </label>

        <label>
          Dessert Description: 
          {/* <input 
            type='text' 
            value={descriptionValue}
            onChange={e=> setDescriptionValue(e.target.value)}
          /> */}
          <textarea id="text" name="text" rows="5" cols="35" type='text' 
          value={descriptionValue}
          onChange={e=> setDescriptionValue(e.target.value)}></textarea>
        </label>
        <button onClick={handleAdd}>Add Dessert</button>
      </div>

    <div id="content">
      <ul>
        {items.map((item)=>(
          <ListItem item={item}/>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default App
