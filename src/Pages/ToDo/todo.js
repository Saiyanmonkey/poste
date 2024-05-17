import { useState , useEffect } from "react";
import TodoHeader from "../../Compontents/Header/header";


export default function Todo({todos, setTodos}) {
    return (
        <div className="container">
            <TodoHeader />
        </div>
    )

}
