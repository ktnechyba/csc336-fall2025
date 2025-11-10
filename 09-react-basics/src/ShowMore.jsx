import { useState } from 'react'
import "./ShowMore.css"

function ShowMore({item}) {

  return (
    // first curly brace write javascript, second = key-value js object literal 
    <p>
        {item.description}
    </p>
  )
}

export default ShowMore