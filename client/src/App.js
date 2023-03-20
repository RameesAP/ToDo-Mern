import './App.css';
import { useState, useEffect } from 'react';

const API_BASE = "http://localhost:5000"

function App() {
  const [todos, setTodos] = useState([])
  const [popupactive, setPopupActive] = useState(false)
  const [newTodo, setNewTodo] = useState("")


  useEffect(() => {
    GetTodos()

  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log("error : ", err))
  }

  return (
    <div className="App">
      <h1>Welcome Ramees</h1>
      <h4>Your tasks</h4>

      <div className="todos">
        {todos.map(todo => (
          <div className={
            "todo " + (todo.complete ? "is-complete" : "")
          } key={todo._id}>

            <div className="checkbox"></div>

            <div className="text">{todo.text}</div>

            <div className="delete-todo">X</div>
          </div>
        ))}


      </div>
    </div>
  );
}

export default App;
