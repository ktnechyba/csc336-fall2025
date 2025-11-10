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
        <div>
            <h2>{item.dessert}</h2>         
            <h3>Origin: {item.origin}</h3>
            {/* change text button text depending on whether show is true or false */}
            <button onClick={handleClick}>{show ? 'Hide Description':'Show Description'}</button>
            {/* if show is true, show the component */}
            {show && <ShowMore item={item}/>}
        </div>
    </li>
  )
}

export default ListItem