import './App.css';
import { useState,useEffect } from 'react';

const 

function App() {
  const [todo,setTodo]=useState([])
  const [popupactive,setPopupActive]=useState(false)
  const [newTodo,setNewTodo]=useState("")


  useEffect(()=>{
    getTodos()
  },[])

  const getTodos=()=>{
    fetch
  }

  return (
    <div className="App">
      <h1>Welcome Ramees</h1>
      <h4>Your tasks</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>

          <div className="text">Get your bread</div>

          <div className="delete-todo">X</div>
        </div>

        <div className="todo is-complete">
          <div className="checkbox"></div>

          <div className="text">Get your Milk</div>

          <div className="delete-todo">X</div>
        </div>

      </div>
    </div>
  );
}

export default App;
