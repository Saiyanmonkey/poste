import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Todo from './Pages/ToDo/todo';

function App() {
  const [todos, setTodos] = useState([]);

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo todos={todos} setTodos={setTodos} />} /> 

      </Routes>
      
    </div>
  );
}

export default App;
