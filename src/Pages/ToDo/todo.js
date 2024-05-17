import React, { useState} from "react";
import TodoHeader from "../../Compontents/Header/header";
import TodoList from "../../Compontents/List/list";
import TextBox from "../../Compontents/Textbox/textbox";

export default function Todo({todos, setTodos}) {
    const [add, setAdd] = useState(false);
    
    const [disabledIndices, setDisabledIndices] = React.useState([]);
    const [checkedIndices, setCheckedIndices] = React.useState([]);

    function disabled(index) {
        const newTodos = [...todos];
        const item = newTodos.splice(index, 1)[0];
        const insertAt = newTodos.length - disabledIndices.length;
        newTodos.push(item);
        setTodos(newTodos);
        setDisabledIndices([insertAt, ...disabledIndices]);
        setCheckedIndices([insertAt, ...checkedIndices]);
    }

    function changeAdd() {
        setAdd(!add);
    }
    return (
        <div className="container d-flex flex-column container-width relative">
            <TodoHeader add={add} changeAdd={changeAdd} setTodos={setTodos} setDisabledIndices={setDisabledIndices}setCheckedIndices={setCheckedIndices}/>
            {add && <TextBox add={add} changeAdd={changeAdd} todos={todos} setTodos={setTodos} disabledIndices={disabledIndices} checkedIndices={checkedIndices}setDisabledIndices={setDisabledIndices} setCheckedIndices={setCheckedIndices}/>}
            <TodoList todos={todos} setTodos={setTodos} add={add} disabled={disabled} disabledIndices={disabledIndices} checkedIndices={checkedIndices} setDisabledIndices={setDisabledIndices} setCheckedIndices={setCheckedIndices}/>
        </div>
    )

}
