import { useState } from 'react'
import TodoItem from "./TodoItem"
import TodoJSON from "./data.json"

function App() {
  //state pattern data binding
  const [x, setx] = useState(10); //usestate returns an array with the variable and the function to call when want to change the variable
  const [name, setName] = useState("mike");
  const [task, setTask] = useState(""); 
  // const [todos, setTodos] = useState([
  //   {
  //     task: "Eat Dinner",
  //     complete: false,
  //     id: 1
  //   },
  //   {
  //     task: "Pet Cat",
  //     complete: true,
  //     id: 2
  //   },
  //   {
  //     task: "Beat Mario Sunshine",
  //     complete: true,
  //     id: 3
  //   }]);
  const [todos, setTodos] = useState(TodoJSON)

  
  function addTodo(){
    let newTodo = {
      task: task,
      completed: false,
      id: Date.now()
    }
    setTodos([...todos, newTodo])//... take every lement in an array and separate with a comma
    setTask("");
  }

  return (
    <div>
      <button onClick={()=> setx(x+1)}>CLICK</button>  {/*rerun value and replace x with new values */}
      Hello World. Here is a number: {x}
      <input 
        type='text' 
        value={task}
        onChange={e=> setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo)=>(
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>

    </div>
  )
}

export default App
