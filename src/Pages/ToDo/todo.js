import { useState , useEffect } from "react";
import TodoHeader from "../../Compontents/Header/header";
import TodoList from "../../Compontents/List/list";

export default function Todo({todos, setTodos}) {
    return (
        <div className="container d-flex flex-column container-width">
            <TodoHeader />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )

}
