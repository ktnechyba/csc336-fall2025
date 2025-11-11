import { useState } from 'react'
import "./ShowMore.css"

function ShowMore({item}) {

  return (
    // first curly brace write javascript, second = key-value js object literal 
    <div id="description">
        <p>
            {item.description}
        </p>
    </div>
  )
}

export default ShowMore