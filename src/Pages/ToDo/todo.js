import { useState} from "react";
import TodoHeader from "../../Compontents/Header/header";
import TodoList from "../../Compontents/List/list";
import TextBox from "../../Compontents/Textbox/textbox";

export default function Todo({todos, setTodos}) {
    const [add, setAdd] = useState(false);


    function changeAdd() {
        setAdd(!add);
    }
    return (
        <div className="container d-flex flex-column container-width relative">
            <TodoHeader add={add} changeAdd={changeAdd} setTodos={setTodos}/>
            {add && <TextBox add={add} changeAdd={changeAdd} todos={todos} setTodos={setTodos}/>}
            <TodoList todos={todos} setTodos={setTodos} add={add}/>
        </div>
    )

}
