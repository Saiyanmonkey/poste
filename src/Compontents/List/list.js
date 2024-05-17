import React from "react";
import './list.css';

export default function TodoList({todos, setTodos}) {

    const listBoxStyle = {
        width: '800px',
        height: '112px',
        position: 'absolute',
        top: '132px',
        left: '53%',
        transform: 'translateX(-50%)',
        padding: '36px',
        borderRadius: '8px',
        opacity: '1',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };
    return (
        <div className="box-style"> 
            {todos.length === 0 ? (
                <p> No todos to show </p>
            ) : (
                todos.map((todo, index) => (
                <p key={index}> {todo} </p>
            ))
            )}
        </div>
    )
}