import React from "react";
import './list.css';
import Item from "../Item/item";

export default function TodoList({todos, setTodos}) {
   
  
    return (
        <div className="box-style mt-4"> 
            {todos.length === 0 ? (
                <p> No todos to show </p>
            ) : (
                todos.map((todo, index) => (
                <Item key={index} index = {index} todo = {todo} todos = {todos} setTodos={setTodos} />
            ))
            )}
        </div>
    )
}