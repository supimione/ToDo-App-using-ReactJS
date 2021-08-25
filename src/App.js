import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';

import "./App.css"

const App = () => {

  const[input, setInput ] = useState("");
  const[todos, setTodos] = useState([]);
  const[editTodo, setEditTodo] = useState(null);

  return(
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form 
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <Todolist 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo} 
          />
        </div>
      </div>
    </>
  )
}

export default App;
