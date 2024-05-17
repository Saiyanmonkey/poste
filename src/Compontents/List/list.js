import React from "react";
import './list.css';
import Item from "../Item/item";

export default function TodoList({todos, setTodos, disabled, disabledIndices, checkedIndices, setDisabledIndices, setCheckedIndices}) {

    return (
        <div className=" mt-4"> 
            {todos.length === 0 ? (
                <p className="box-style"> No todos to show </p>
            ) : (
                todos.map((todo, index) => (
                <Item  key={index} index = {index} todo = {todo} todos = {todos} setTodos={setTodos} disabled={disabled} isDisabled = {disabledIndices.includes(index)} isChecked={checkedIndices.includes(index)} disabledIndices={disabledIndices} checkedIndices = {checkedIndices} setDisabledIndices={setDisabledIndices} setCheckedIndices = {setCheckedIndices}/>
            ))
            )}
        </div>
    )
}