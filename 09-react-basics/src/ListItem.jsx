import { useState } from 'react'
import "./ListItem.css"
import ShowMore from './ShowMore'

function ListItem({item}) {
    const [show, setShow] = useState(false);
    function handleClick(){
        setShow(!show)
    }
  return (
    // first curly brace write javascript, second = key-value js object literal 
    <li>
        <div key={item.id}>
            <h2>{item.dessert}</h2>         
            <h3>Origin: {item.origin}</h3>
            {/* change text button text depending on whether show is true or false */}
            <button onClick={handleClick}>{show ? 'Hide Dessert Description':'Show Dessert Description'}</button>
            {/* if show is true, show the component */}
            {show && <ShowMore item={item}/>}
        </div>
    </li>
  )
}

export default ListItem