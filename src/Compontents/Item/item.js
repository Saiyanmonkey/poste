import React from "react";
import './item.css';
import { ReactComponent as Delete } from './MinusCircle.svg';
import { ReactComponent as Check } from './CheckCircle.svg';
import { ReactComponent as Green } from './Vector.svg';

export default function Item({index, todo, todos, setTodos, disabled, isDisabled, isChecked, disabledIndices, checkedIndices, setDisabledIndices, setCheckedIndices }) {

    function deleteItem() {
        setTodos(todos.filter((_,todoindex) => todoindex !== index));
        setDisabledIndices(disabledIndices.map(index => index - 1));
        setCheckedIndices(checkedIndices.map(index => index - 1));
    }

    function checkItem() {
        if (!isChecked) {
            disabled(index);
        }
    }

    return (
        <div className={`d-flex justify-content-between align-items-center item-style ${isDisabled ? 'disabled' : ''}`} >
            <div onClick={checkItem}>   
                {isChecked ? <Green/> : <Check/>}
            </div>
            <li className="list-group-item ">{todo}</li>
            <button className="btn" onClick={deleteItem}>
                <Delete/>
            </button>
        </div>
    )
}