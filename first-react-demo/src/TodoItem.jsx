import { useState } from 'react'
import "./TodoItem.css"

function TodoItem({todo}) {

  return (
    // first curly brace write javascript, second = key-value js object literal 
    <li style={{textDecoration: todo.complete ? "line-through" : "none"}}>
        {todo.task}
    </li>
  )
}

export default TodoItem